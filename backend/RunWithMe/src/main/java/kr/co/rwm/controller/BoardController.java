package kr.co.rwm.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.annotations.ApiOperation;
import kr.co.rwm.entity.Board;
import kr.co.rwm.entity.User;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.BoardService;
import kr.co.rwm.service.JwtTokenProvider;
import kr.co.rwm.service.S3Service;
import kr.co.rwm.service.UserService;
import lombok.RequiredArgsConstructor;

/**
 * BoardController
 * 
 * <pre>
 * <b> History: </b>
 * 				김순빈, ver.0.2. 2020-11-08, 챌린지 제안 이미지 저장 기능 추가
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
@RequestMapping("/boards")
public class BoardController {
	
	private final JwtTokenProvider jwtTokenProvider;
	private final UserService userService;
	private final S3Service s3Service;

	@Autowired BoardService boardService;

	@GetMapping("")
	public ResponseEntity<Response<Object>> allBoardList(){
		List<Board> list = boardService.allBoardList();
		
		return new ResponseEntity<>(
				new Response<>(StatusCode.OK, ResponseMessage.READ_BOARDLIST_SUCCESS, list), HttpStatus.OK);
	}
	
	@PostMapping("/board")
	public ResponseEntity<Response<Object>> insert(@RequestBody Map<String, String> boardInfo) {
		int userId = Integer.parseInt(boardInfo.get("writerId"));
		Optional<User> user = userService.findByUserId(userId);
		if(!user.isPresent()) {
			return new ResponseEntity<>(
					new Response<>(StatusCode.FORBIDDEN,ResponseMessage.USER_NOT_FOUND),HttpStatus.FORBIDDEN);
		}
		String writerName = user.get().getUsername();
		String writerProfile = user.get().getProfile();
		Board ret = boardService.save(boardInfo, writerName, writerProfile);
		
		return new ResponseEntity<> (
				new Response<>(StatusCode.OK, ResponseMessage.INSERT_BOARD_SUCCESS, ret), HttpStatus.OK);

	}
	
	@ApiOperation(value = "챌린지 제안하기 이미지 저장", response = ResponseEntity.class)
	@PostMapping("/board/{board_id}")
	public ResponseEntity<Response<Object>> insertImage(@PathVariable int board_id, 
							   @RequestParam("files") MultipartFile files, HttpServletRequest request) {
		if(files == null) {
			return new ResponseEntity<> (
					new Response<>(StatusCode.NO_CONTENT, ResponseMessage.BOARD_IMAGE_NO_CONTENT), HttpStatus.NO_CONTENT);
		}
		
		String url = s3Service.challengeImgUpload(files, "board");
		Board board = boardService.saveImage(board_id, url);
		if(board == null) {
			return new ResponseEntity<> (
					new Response<>(StatusCode.NOT_FOUND, ResponseMessage.BOARD_NOT_FOUND), HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<> (
				new Response<>(StatusCode.OK, ResponseMessage.INSERT_BOARD_IMAGE_SUCCESS, board), HttpStatus.OK);
	}
	
	@PutMapping("/board")
	public ResponseEntity<Response<Object>> update(@RequestBody Map<String, String> boardInfo) {
		Board ret = boardService.update(boardInfo);
		
		return new ResponseEntity<> (
				new Response<>(StatusCode.OK, ResponseMessage.UPDATE_BOARD_SUCCESS, ret), HttpStatus.OK);
	}
	
	@DeleteMapping("/board/{board_id}")
	public ResponseEntity<Response<Object>> delete(@PathVariable int board_id) {
		Long ret = boardService.delete(board_id);
		
		return new ResponseEntity<> (
				new Response<>(StatusCode.OK, ResponseMessage.DELETE_BOARD_SUCCESS, ret), HttpStatus.OK);
	}
	
	@GetMapping("/board/{board_id}")
	public ResponseEntity<Response<Object>> detail(@PathVariable int board_id, HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		int uid = 0;
		if(jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
		}
		Board ret = boardService.detail(board_id, uid);
		
		return new ResponseEntity<> (
				new Response<>(StatusCode.OK, ResponseMessage.DETAIL_BOARD_SUCCESS, ret), HttpStatus.OK);
	}
	
}








