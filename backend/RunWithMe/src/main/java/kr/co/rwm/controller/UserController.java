package kr.co.rwm.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	// 이메일 중복 확인
	@GetMapping("/check/{userEmail}")
	public ResponseEntity<?> emailCheck(@PathVariable String userEmail){
		if(userService.findByUserEmail(userEmail).isPresent()) {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN,ResponseMessage.ALREADY_USER_EMAIL,false),HttpStatus.FORBIDDEN);
		}
		
		return new ResponseEntity<Response>(new Response(StatusCode.OK,ResponseMessage.EMAIL_CHECK_OK,true),HttpStatus.OK);
	}
	
	
	@PostMapping("/signin")
	public ResponseEntity signin(@RequestBody User user, HttpServletResponse response){
		User member = userService.findByUserEmail(user.getUserEmail())
				.orElseThrow(()->new RestException(ResponseMessage.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
		
		if(!passwordEncoder.matches(user.getPassword(),member.getPassword())) {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.SIGNIN_FAIL),
					HttpStatus.FORBIDDEN);
		}
		System.out.println("***"+member.getRoles());
		String token = jwtTokenProvider.generateToken(member.getUsername(),member.getRoles());
		
		response.setHeader("AUTH", token);		
		
		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.SIGNIN_SUCCESS, member),
				HttpStatus.OK);
	}
	
	@GetMapping("/test")
	public String test() {
		return "test";
	}
	
}
