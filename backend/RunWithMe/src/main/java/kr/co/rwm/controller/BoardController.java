package kr.co.rwm.controller;

import java.util.List;
import java.util.Map;

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

import kr.co.rwm.entity.Board;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.BoardService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/boards")
public class BoardController {
	
	@Autowired BoardService boardService;
	
	@GetMapping("/")
	public ResponseEntity allBoardList(){
		List<Board> list = boardService.allBoardList();
		return new ResponseEntity<Response> (new Response(StatusCode.OK, ResponseMessage.READ_BOARDLIST_SUCCESS, list), HttpStatus.OK);
	}
	
	@PostMapping("/board")
	ResponseEntity insert(@RequestBody Map<String, String> boardInfo) {
		Board ret = boardService.save(boardInfo);
		return new ResponseEntity<Response> (new Response(StatusCode.OK, ResponseMessage.INSERT_BOARD_SUCCESS, ret), HttpStatus.OK);

	}
	
	@PutMapping("/board")
	ResponseEntity update(@RequestBody Map<String, String> boardInfo) {
		Board ret = boardService.update(boardInfo);
		return new ResponseEntity<Response> (new Response(StatusCode.OK, ResponseMessage.UPDATE_BOARD_SUCCESS, ret), HttpStatus.OK);
	}
	
	@DeleteMapping("/board/{board_id}")
	ResponseEntity delete(@PathVariable int board_id) {
		Long ret = boardService.delete(board_id);
		
		return new ResponseEntity<Response> (new Response(StatusCode.OK, ResponseMessage.DELETE_BOARD_SUCCESS, ret), HttpStatus.OK);
	}
	
	@GetMapping("/board/{board_id}")
	ResponseEntity detail(@PathVariable int board_id) {
		Board ret = boardService.detail(board_id);

		return new ResponseEntity<Response> (new Response(StatusCode.OK, ResponseMessage.DETAIL_BOARD_SUCCESS, ret), HttpStatus.OK);
	}
	
}








