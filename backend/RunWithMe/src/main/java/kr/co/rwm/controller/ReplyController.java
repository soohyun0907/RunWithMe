package kr.co.rwm.controller;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rwm.entity.Reply;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.JwtTokenProvider;
import kr.co.rwm.service.ReplyService;
import lombok.RequiredArgsConstructor;

/*
 * ReplyController
 * <pre>
 * <b> History:</b>
 *			이선수, ver.0.1 , 2020-10-28 : ReplyController 구축
 * </pre>
 * 
 * @author 김형택
 * @version 0.4, 2020-11-12, RequestMapping - public 수정
 * @see None
 * 
 */

@RestController
@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RequestMapping("/replies")
public class ReplyController {

	private final JwtTokenProvider jwtTokenProvider;

	@Autowired
	ReplyService replyService;
	
	@GetMapping("")
	public ResponseEntity<Response<Object>> replyList() {
		List<Reply> list = replyService.allReplyList();
		return new ResponseEntity<> (new Response<>(StatusCode.OK, ResponseMessage.READ_REPLY_SUCCESS, list), HttpStatus.OK);
	}
	
	@GetMapping("/reply/{boardId}")
	public ResponseEntity<Response<Object>> replyListByBoardId(@PathVariable int boardId) {
		List<Reply> list = replyService.findReplyByBoardId(boardId);
		return new ResponseEntity<> (new Response<>(StatusCode.OK, ResponseMessage.READ_REPLY_SUCCESS, list), HttpStatus.OK);
	}
	
	@PostMapping("/reply")
	public ResponseEntity<Response<Object>> insert(@RequestBody Map<String, String> replyInfo, HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		int uid = 0;
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
		}
		Reply ret = replyService.save(uid, replyInfo);
		return new ResponseEntity<> (new Response<>(StatusCode.OK, ResponseMessage.INSERT_REPLY_SUCCESS, ret), HttpStatus.OK);

	}
	
	@PutMapping("/reply")
	public ResponseEntity<Response<Object>> update(@RequestBody Map<String, String> replyInfo) {
		Reply ret = replyService.update(replyInfo);
		return new ResponseEntity<> (new Response<>(StatusCode.OK, ResponseMessage.UPDATE_REPLY_SUCCESS, ret), HttpStatus.OK);
	}
	
	@DeleteMapping("/reply/{reply_id}")
	public ResponseEntity<Response<Object>> delete(@PathVariable int reply_id) {
		Long ret = replyService.delete(reply_id);
		return new ResponseEntity<> (new Response<>(StatusCode.OK, ResponseMessage.DELETE_REPLY_SUCCESS, ret), HttpStatus.OK);
	}
	

	
}
