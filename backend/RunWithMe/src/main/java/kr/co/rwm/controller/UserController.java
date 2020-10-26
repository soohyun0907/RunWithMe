package kr.co.rwm.controller;

import java.util.Date;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import kr.co.rwm.entity.User;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.RestException;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.JwtTokenProvider;
import kr.co.rwm.service.UserService;
import lombok.RequiredArgsConstructor;

/*
 * UserController
 * <pre>
 * <b> History:</b>
 *			김형택, ver.0.1 , 2020-10-26, (First Commit)
 * </pre>
 * 
 * @author 김형택
 * @version 0.1, 2020-10-26, 유저 관리 Controller
 * @see None
 * 
 */


@CrossOrigin(origins="*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
	
	private final PasswordEncoder passwordEncoder;
	private final JwtTokenProvider jwtTokenProvider;
	private final RedisTemplate<String, String> logoutRedis;
	
	@Autowired
	private UserService userService;
	
	/**
	 * 회원가입 - 이메일 중복 여부 True/False를 판단하고, True일 경우 JSON 객체 기반으로 회원가입을 진행한다.
	 * 
	 * @param	
	 * @return ResponseEntity<Response> - StatusCode,
	 *         ResponseMessage(SIGNUP_SUCCESS), HttpStatus <br>
	 * @apiNote User user - 
	 * 			String userEmail, String userPw, String userName, String profile, boolean emailAuth <br>        
	 *      
	 * @exception RestException EMAIL_CHECK_FAIL
	 */
	@ApiOperation(value = "회원 가입", response = ResponseEntity.class, notes = "userName, userEmail, userPw가 담긴 JSON객체로 회원가입을 한다.")
	@PostMapping("")
	public ResponseEntity<?> signup(@RequestBody User user){
		if(!user.getAuth()) {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN,ResponseMessage.EMAIL_CHECK_FAIL,false),HttpStatus.FORBIDDEN);
		}else {
			userService.join(user, passwordEncoder.encode(user.getPassword()));
			
			return new ResponseEntity<Response>(new Response(StatusCode.CREATED,ResponseMessage.SIGNUP_SUCCESS),HttpStatus.CREATED);
		}
	}
	
	/**
	 * 이메일 중복 확인 
	 * 
	 * @param  userEmail 사용자 이메일
	 * @return ResponseEntity<Response> - StatusCode,
	 *         ResponseMessage(ALREADY_USER_EMAIL, EMAIL_CHECK_OK), HttpStatus <br>
	 * @apiNote 중복일 경우 False / 중복이 아닐 경우 True를 반환        
	 *      
	 */
	@ApiOperation(value = "회원 가입", response = ResponseEntity.class, notes = "userEmail로 이메일 중복체크를 한다.")
	@GetMapping("/check/{userEmail}")
	public ResponseEntity<?> emailCheck(@PathVariable String userEmail){
		if(userService.findByUserEmail(userEmail).isPresent()) {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN,ResponseMessage.ALREADY_USER_EMAIL,false),HttpStatus.FORBIDDEN);
		}
		
		return new ResponseEntity<Response>(new Response(StatusCode.OK,ResponseMessage.EMAIL_CHECK_OK,true),HttpStatus.OK);
	}
	
	/**
	 * 로그인
	 * 
	 * @param  user 사용자 정보 (userEmail, userPw)
	 * @return ResponseEntity<Response> - StatusCode, member
	 *         ResponseMessage(USER_NOT_FOUND, SIGNIN_FAIL, SIGNIN_SUCCESS), HttpStatus <br>
	 * @apiNote 해당 사용자 정보가 없는 경우 : USER_NOT_FOUND <br>
	 * 			비밀번호가 일치하지 않는 경우 : SIGNIN_FAIL <br>
	 * 			로그인 성공한 경우 : SIGNIN_SUCCESS <br>
	 *      
	 */
	@PostMapping("/signin")
	public ResponseEntity signin(@RequestBody User user, HttpServletResponse response){
		User member = userService.findByUserEmail(user.getUserEmail())
				.orElse(null);
		if(member==null) {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN,ResponseMessage.USER_NOT_FOUND),HttpStatus.FORBIDDEN);
		}
		if(!passwordEncoder.matches(user.getPassword(),member.getPassword())) {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.SIGNIN_FAIL),
					HttpStatus.FORBIDDEN);
		}
		String token = jwtTokenProvider.generateToken(member.getUsername(),member.getRoles());
		
		response.setHeader("AUTH", token);		
		
		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.SIGNIN_SUCCESS, member),
				HttpStatus.OK);
	}
	
	/**
	 * 로그아웃 - 토큰을 만료시키고 redis에 저장하여 블랙리스트 생성(토큰만료시간까지 저장시켜두고 추후 자동 삭제)
	 * 
	 * @param
	 * @return ResponseEntity<Response> - StatusCode,
	 *         ResponseMessage(LOGOUT_SUCCESS,LOGOUT_FAIL), HttpStatus
	 * @exception FORBIDDEN
	 */
	@ApiOperation(value = "로그아웃", response = ResponseEntity.class, notes = "토큰을 만료시키고 redis에 저장하여 블랙리스트를 생성합니다.(토큰만료시간까지 저장시켜두고 추후 자동 삭제)")
	@GetMapping(path = "/signout")
	public ResponseEntity logout(HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		if (jwtTokenProvider.validateToken(token)) {
			Date expirationDate = jwtTokenProvider.getExpirationDate(token);
			logoutRedis.opsForValue().set(token, "logout", expirationDate.getTime() - System.currentTimeMillis(),
					TimeUnit.MILLISECONDS);
			System.out.println(logoutRedis.opsForValue().get(token));
			return new ResponseEntity<Response>(new Response(StatusCode.NO_CONTENT, ResponseMessage.LOGOUT_SUCCESS),
					HttpStatus.OK);
		} else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.LOGOUT_FAIL),
					HttpStatus.FORBIDDEN);
		}
	}
	
	
}
