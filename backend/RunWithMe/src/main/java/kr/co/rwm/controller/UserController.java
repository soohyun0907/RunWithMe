package kr.co.rwm.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rwm.entity.User;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.RestException;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.JwtTokenProvider;
import kr.co.rwm.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
	
	private final PasswordEncoder passwordEncoder;
	private final JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity join(@RequestBody User user, HttpServletResponse response){
		User member = userService.findByUserEmail(user.getUserEmail())
				.orElseThrow(()->new RestException(ResponseMessage.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
		
		if(!user.getPassword().equals(member.getPassword())) {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.SIGNIN_FAIL),
					HttpStatus.FORBIDDEN);
		}
		
		String token = jwtTokenProvider.generateToken(member.getUsername());
		
		response.setHeader("AUTH", token);		
		
		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.SIGNIN_SUCCESS, member),
				HttpStatus.OK);
	}
	
	@PostMapping("")
	public ResponseEntity signUp(@RequestBody User user) {
		if (userService.findByUserEmail(user.getUserEmail()).isPresent()) {
			throw new RestException(ResponseMessage.ALREADY_USER_EMAIL, HttpStatus.FORBIDDEN);
		}

//		NoOpPasswordEncoder
		userService.join(user, "{noop}"+passwordEncoder.encode(user.getPassword()));

		return new ResponseEntity<Response>(new Response(StatusCode.CREATED, ResponseMessage.SIGNUP_SUCCESS),
				HttpStatus.CREATED);
	}
	
	@GetMapping("/test")
	public String test() {
		return "test";
	}
	
}
