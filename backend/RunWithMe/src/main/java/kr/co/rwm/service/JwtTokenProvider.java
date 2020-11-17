package kr.co.rwm.service;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Component
public class JwtTokenProvider {
 
	@Value("${spring.jwt.secret}")
	private String secretKey;
	private final RedisTemplate<String, String> logoutRedis;

	private long tokenValidMilisecond = 1000L * 60 * 60 * 2; // 2시간만 토큰 유효

	private final UserDetailsService userDetailsService;

	/**
	 * 이름으로 Jwt Token을 생성한다.
	 */
	public String generateToken(Integer userId, String email, List<String> roles) {
		Claims claims = Jwts.claims().setSubject(email); // JWT payload 에 저장되는 정보단위
		claims.put("userPk", userId);	// user의 pk 저장
		claims.put("roles", roles); // 정보는 key / value 쌍으로 저장된다.
		Date now = new Date();
		return Jwts.builder().setClaims(claims).setId(email).setIssuedAt(now) // 토큰 발행일자
				.setExpiration(new Date(now.getTime() + tokenValidMilisecond)) // 유효시간 설정
				.signWith(SignatureAlgorithm.HS256, secretKey) // 암호화 알고리즘, secret값 세팅
				.compact();
	}

	/**
	 * Jwt Token을 복호화 하여 이름을 얻는다.
	 */
	public String getUserEmailFromJwt(String jwt) {
		return getClaims(jwt).getBody().getId();
	}
	
	/**
	 * Jwt Token의 유효성을 체크한다.
	 */
	public boolean validateToken(String jwt) {
		try {
			Jws<Claims> claims = this.getClaims(jwt);
			if (null != logoutRedis.opsForValue().get(jwt)) {
				log.info(("이미 로그아웃 처리된 사용자"));
				return false;
			}

			return !claims.getBody().getExpiration().before(new Date());
		} catch (Exception e) {
			return false;
		}
	}

	private Jws<Claims> getClaims(String jwt) {
		try {
			return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwt);
		} catch (SignatureException ex) {
			log.error("Invalid JWT signature");
			throw ex;
		} catch (MalformedJwtException ex) {
			log.error("Invalid JWT token");
			throw ex;
		} catch (ExpiredJwtException ex) {
			log.error("Expired JWT token");
			throw ex;
		} catch (UnsupportedJwtException ex) {
			log.error("Unsupported JWT token");
			throw ex;
		} catch (IllegalArgumentException ex) {
			log.error("JWT claims string is empty.");
			throw ex;
		}
	}

	// Request의 Header에서 token 값을 가져옵니다. "X-AUTH-TOKEN" : "TOKEN값'
	public String resolveToken(HttpServletRequest request) {
		return request.getHeader("AUTH");
	}

	// 토큰에서 회원 정보 추출
	public String getUserPk(String token) {
		return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
	}

	// JWT 토큰에서 인증 정보 조회
	public Authentication getAuthentication(String token) {

		UserDetails userDetails = userDetailsService.loadUserByUsername(this.getUserEmailFromJwt(token));
		return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
	}

	// 만료기간 확인
	public Date getExpirationDate(String token) {
		Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
		return claims.getBody().getExpiration();
	}

	// 정보 확인
	public List<String> getRole(String token) {
		Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
		return (List<String>) claims.getBody().get("roles");
	}

	/**
	 * Jwt Token을 복호화 하여 userPk를 얻는다.
	 */
	public Integer getUserIdFromJwt(String token) {
		Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
		return (Integer) claims.getBody().get("userPk");
	}

}
