package kr.co.rwm.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rwm.entity.Friend;
import kr.co.rwm.entity.User;
import kr.co.rwm.service.FriendService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/friends")
public class FriendController {
	
	@Autowired
	FriendService friendService;
	
	@GetMapping("/contacts/{uid}")
	public List<User> contacts(@PathVariable int uid) {
		return friendService.list(uid);
	}
	
	@PostMapping("/friend")
	public ResponseEntity<String> insert(@RequestBody Map<String, Integer> friendInfo){
		System.out.println("friends/controller/추가");
		
		
		friendService.insert(friendInfo);
		
		
		return new ResponseEntity<String>("success", HttpStatus.CREATED);
	}
	
}
