package kr.co.rwm.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins="*")
public class UserController {
	
	private final PasswordEncoder passwordEncoder;
	private final JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/signin")
	public ResponseEntity signin(@RequestBody User user, HttpServletResponse response){
		System.out.println(user);
		User member = userService.findByUserEmail(user.getUserEmail())
				.orElseThrow(()->new RestException(ResponseMessage.USER_NOT_FOUND, HttpStatus.NOT_FOUND));
		System.out.println(member);
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
	
	@PostMapping("")
	public ResponseEntity signUp(@RequestBody User user) {
		if (userService.findByUserEmail(user.getUserEmail()).isPresent()) {
			throw new RestException(ResponseMessage.ALREADY_USER_EMAIL, HttpStatus.FORBIDDEN);
		}

//		NoOpPasswordEncoder
		userService.join(user, passwordEncoder.encode(user.getPassword()));

		return new ResponseEntity<Response>(new Response(StatusCode.CREATED, ResponseMessage.SIGNUP_SUCCESS),
				HttpStatus.CREATED);
	}
	
	@GetMapping("/test")
	public String test() {
		return "test";
	}
	
}
