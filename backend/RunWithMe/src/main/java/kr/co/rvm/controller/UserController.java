package kr.co.rvm.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rvm.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/join")
	public ResponseEntity<String> join(@RequestBody Map<String, String> userInfo){
		System.out.println("users/controller/회원가입");
		
		
		userService.join(userInfo);
		
		
		return new ResponseEntity<String>("success", HttpStatus.CREATED);
	}
	
	
}
