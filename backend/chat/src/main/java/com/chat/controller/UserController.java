package com.chat.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chat.model.User;
import com.chat.service.IUserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "*")
@Slf4j
@RequestMapping("/api/chat")
@RequiredArgsConstructor
@RestController
public class UserController {

	private final IUserService userService;

	// 유저 생성
	@PostMapping("/user")
	public ResponseEntity<User> createUser(@RequestBody User newUser) {
		long resultOfCreation = userService.createUser(newUser);
		if (resultOfCreation >= 0)
			return ResponseEntity.status(HttpStatus.OK).body(newUser);
		else
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
	}

	// 정보 확인
	@PostMapping("/login")
	public ResponseEntity<String> signinUser(@RequestBody User user) {
		boolean resultOfSignin = userService.signin(user);
		if (resultOfSignin)
			return ResponseEntity.status(HttpStatus.OK).body(user.getNickname());
		else
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
	}

}