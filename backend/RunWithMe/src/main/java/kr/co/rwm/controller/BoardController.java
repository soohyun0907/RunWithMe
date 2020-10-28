package kr.co.rwm.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import kr.co.rwm.entity.Board;
import kr.co.rwm.entity.BoardMedia;
import kr.co.rwm.entity.User;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.repo.BoardMediaRepository;
import kr.co.rwm.service.BoardService;
import kr.co.rwm.service.JwtTokenProvider;
import kr.co.rwm.service.S3Service;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping("/boards")
public class BoardController {

	private final JwtTokenProvider jwtTokenProvider;
	private final S3Service s3Service;

	@Autowired
	BoardService boardService;
	@Autowired
	BoardMediaRepository boardMediaRepository;

	@GetMapping("/")
	public ResponseEntity allBoardList() {
		List<Board> list = boardService.allBoardList();
		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.READ_BOARDLIST_SUCCESS, list),
				HttpStatus.OK);
	}

	@PostMapping("/board")
	ResponseEntity insert(@RequestBody Map<String, String> boardInfo) {
		Board ret = boardService.save(boardInfo);
		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.INSERT_BOARD_SUCCESS, ret),
				HttpStatus.OK);

	}

	@PutMapping("/board")
	ResponseEntity update(@RequestBody Map<String, String> boardInfo) {
		Board ret = boardService.update(boardInfo);
		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.UPDATE_BOARD_SUCCESS, ret),
				HttpStatus.OK);
	}

	@DeleteMapping("/board/{board_id}")
	ResponseEntity delete(@PathVariable int board_id) {
		Long ret = boardService.delete(board_id);

		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.DELETE_BOARD_SUCCESS, ret),
				HttpStatus.OK);
	}

	@GetMapping("/board/{board_id}")
	ResponseEntity detail(@PathVariable int board_id, HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		int uid = 0;
		if (jwtTokenProvider.validateToken(token)) {
			uid = jwtTokenProvider.getUserIdFromJwt(token);
		}
		Board ret = boardService.detail(board_id, uid);

		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.DETAIL_BOARD_SUCCESS, ret),
				HttpStatus.OK);
	}

	@PostMapping("/board/{board_id}")
	public ResponseEntity uploadMedia(@PathVariable int board_id, MultipartFile[] mediafiles,
			HttpServletRequest request) {

		Optional<Board> board = boardService.findByBoardId(board_id);
		if (board.get() == null) {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.NOT_FOUND_BOARD),
					HttpStatus.FORBIDDEN);
		} else {
			Board updateBoard = board.get();
			List<BoardMedia> boardMediaList = updateBoard.getBoardMedia();
			for (MultipartFile multipartFile : mediafiles) {
				String url = s3Service.mediaFileUpload(multipartFile);
				BoardMedia boardMedia = BoardMedia.builder().mediaId(board.get().getBoardId()).mediaURL(url).build();
				boardMediaRepository.save(boardMedia);
				boardMediaList.add(boardMedia);
			} 
			updateBoard.setBoardMedia(boardMediaList);
			boardService.insertMedia(board, updateBoard);
			
			return new ResponseEntity<Response>(
					new Response(StatusCode.OK, ResponseMessage.UPLOAD_PROFILE_SUCCESS, updateBoard), HttpStatus.OK);
		}

	}

}
