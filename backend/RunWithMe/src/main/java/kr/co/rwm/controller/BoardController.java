package kr.co.rwm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rwm.entity.Board;
import kr.co.rwm.service.BoardService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/board")
public class BoardController {
	
	@Autowired BoardService boardService;
	
	@GetMapping("/")
	List<Board> allBoardList(){
		
		
		return null;
	}
	
}
