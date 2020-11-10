package kr.co.rwm.service;

import java.util.List;
import java.util.Map;

import kr.co.rwm.entity.Board;

public interface BoardService {

	List<Board> allBoardList();

	Board save(Map<String, String> boardInfo, String writerName);

	Board update(Map<String, String> boardInfo);

	Long delete(int board_id);

	Board detail(int board_id, int uid);
	
	Board saveImage(int board_id, String url);

}
