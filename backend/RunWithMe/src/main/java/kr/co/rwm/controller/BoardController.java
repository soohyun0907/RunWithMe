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
		List<Board> list = null;
		
		return new ResponseEntity<Response> (new Response(StatusCode.OK, ResponseMessage.READ_FRIENDLIST_SUCCESS, list), HttpStatus.OK);
	}
	
	@PostMapping("/board")
	int insert(@RequestBody Map<String, String> boardInfo) {
		
		return 0;
	}
	
	@PutMapping("/board/{board_id}")
	int update(@PathVariable int board_id) {
		
		return 0;
	}
	
	@DeleteMapping("/board/{board_id}")
	int delete(@PathVariable int board_id) {
		
		return 0;
	}
	
	@GetMapping("/board/{board_id}")
	Board detail(@PathVariable int board_id) {
		
		return null;
	}
	
}








