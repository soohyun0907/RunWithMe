package kr.co.rwm.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

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

import kr.co.rwm.entity.User;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.FriendService;
import kr.co.rwm.service.JwtTokenProvider;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping("/friends")
public class FriendController {
	
	private final JwtTokenProvider jwtTokenProvider;

	@Autowired
	FriendService friendService;
	
	@GetMapping("/contacts")
	public ResponseEntity contacts(HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		int uid = 0;
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
		}
		List<User> list = friendService.list(uid);
		return new ResponseEntity<Response> (new Response(StatusCode.OK, ResponseMessage.READ_FRIENDLIST_SUCCESS, list), HttpStatus.OK);
	}
	
	@PostMapping("/friend")
	public ResponseEntity insert(@RequestBody Map<String, Integer> friendInfo){
		System.out.println("friends/controller/추가");

		friendService.insert(friendInfo);
		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.INSERT_FRIEND_SUCCESS, 1), HttpStatus.OK);
	}
}
