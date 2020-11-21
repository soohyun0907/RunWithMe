package kr.co.rwm.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import kr.co.rwm.entity.Friend;
import kr.co.rwm.entity.Ranks;
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
	public ResponseEntity<Response<Object>> contacts(HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		int uid = 0; 
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
			List<Ranks> list = friendService.contactList(uid);
			return new ResponseEntity<> (new Response<>(StatusCode.OK, ResponseMessage.READ_FRIENDLIST_SUCCESS, list), HttpStatus.OK);
		}else {
			return new ResponseEntity<> (new Response<>(StatusCode.FORBIDDEN,ResponseMessage.FORBIDDEN),HttpStatus.FORBIDDEN);
		}
	}
	
	/**
	 * 온라인 중인 내 친구들 목록 조회 
	 * @param request
	 * @return
	 */
	@GetMapping("/contacts/online")
	public ResponseEntity<Response<Object>> onlineContacts(HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		int uid = 0; 
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
			Map<String,List<User>> result = new HashMap<String, List<User>>();
			List<User> list = friendService.offlineList(uid);
			result.put("off", list);
			list = friendService.onlineList(uid);
			result.put("on", list);
			
			return new ResponseEntity<> (new Response<>(StatusCode.OK, ResponseMessage.READ_FRIENDLIST_SUCCESS, result), HttpStatus.OK);
		}else {
			return new ResponseEntity<> (new Response<>(StatusCode.FORBIDDEN,ResponseMessage.FORBIDDEN),HttpStatus.FORBIDDEN);
		}
	}
	
	@GetMapping("/match/{gender}")
	public ResponseEntity<Response<Object>> match(HttpServletRequest request, @PathVariable String gender) {
		String token = request.getHeader("AUTH");
		int uid = 0; 
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
			List<User> list = friendService.match(uid, gender);
			return new ResponseEntity<> (new Response<>(StatusCode.OK, ResponseMessage.READ_MATCHLIST_SUCCESS, list), HttpStatus.OK);
		}else {
			return new ResponseEntity<> (new Response<>(StatusCode.FORBIDDEN,ResponseMessage.FORBIDDEN),HttpStatus.FORBIDDEN);
		}
	}
	
	@GetMapping("/analysis/{gender}")
	public ResponseEntity<Response<Object>> analysis(HttpServletRequest request, @PathVariable String gender) {
		String token = request.getHeader("AUTH");
		int uid = 0; 
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
			List<User> list = friendService.analysis(uid, gender);
			return new ResponseEntity<> (new Response<>(StatusCode.OK, ResponseMessage.READ_MATCHLIST_SUCCESS, list), HttpStatus.OK);
		}else {
			return new ResponseEntity<> (new Response<>(StatusCode.FORBIDDEN,ResponseMessage.FORBIDDEN),HttpStatus.FORBIDDEN);
		}
	}

	
	@ApiOperation(value = "팔로우", response = ResponseEntity.class)
	@PostMapping("/friend/{friendId}")
	public ResponseEntity<Response<Object>> insert(@PathVariable int friendId, HttpServletRequest request){
		String token = request.getHeader("AUTH");
		int uid = 0;
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
			Friend result = friendService.insert(uid, friendId);
			if(result == null) {
				return new ResponseEntity<>(new Response<>(StatusCode.NOT_FOUND, ResponseMessage.USER_NOT_FOUND, null), HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>(new Response<>(StatusCode.OK, ResponseMessage.INSERT_FRIEND_SUCCESS, result), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(new Response<>(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED), HttpStatus.FORBIDDEN);
		}
	}
	
	@ApiOperation(value = "팔로우 취소", response = ResponseEntity.class)
	@DeleteMapping("/friend/{friendId}")
	public ResponseEntity<Response<Object>> delete(@PathVariable int friendId, HttpServletRequest request){
		String token = request.getHeader("AUTH");
		int uid = 0;
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
			Long ret = friendService.delete(uid, friendId);
			if(ret == -1) {
				return new ResponseEntity<>(new Response<>(StatusCode.NOT_FOUND, ResponseMessage.USER_NOT_FOUND, null), HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>(new Response<>(StatusCode.OK, ResponseMessage.DELETE_FRIEND_SUCCESS, ret), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(new Response<>(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED), HttpStatus.FORBIDDEN);
		}
	}
	
	@ApiOperation(value = "팔로잉 여부 조회", response = ResponseEntity.class)
	@GetMapping("/friend/{friendId}")
	public ResponseEntity<Response<Object>> isFollowing(@PathVariable int friendId, HttpServletRequest request){
		String token = request.getHeader("AUTH");
		int uid = 0;
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
			boolean isFollowing = friendService.findByUserIdAndFriendId(uid, friendId);
			
			return new ResponseEntity<>(new Response<>(StatusCode.OK, ResponseMessage.FOLLOWING_SEARCH_SUCCESS, isFollowing), HttpStatus.OK);

		}else {
			return new ResponseEntity<>(new Response<>(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED), HttpStatus.FORBIDDEN);
		}
	} 

}


