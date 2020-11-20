package kr.co.rwm.service;

import java.util.Date;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Board;
import kr.co.rwm.entity.Reply;
import kr.co.rwm.entity.User;
import kr.co.rwm.repo.BoardRepository;
import kr.co.rwm.repo.RanksRepository;
import kr.co.rwm.repo.RecordRepository;
import kr.co.rwm.repo.ReplyRepository;
import kr.co.rwm.repo.RunningRepository;
import kr.co.rwm.repo.RunningUserRepository;
import kr.co.rwm.repo.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ReplyServiceImpl implements ReplyService {

	private final BoardRepository boardRepository;
	
	@Autowired
	ReplyRepository replyRepository;

	@Autowired
	UserRepository userRepository;

	@Override
	public List<Reply> allReplyList() {

		List<Reply> list = replyRepository.findAll();
		return list;
	}

	@Override
	public Reply save(int uid, Map<String, String> replyInfo) {

		Reply reply = Reply.builder().boardId(Integer.parseInt(replyInfo.get("boardId")))
				.content(replyInfo.get("content")).replyDepth(Integer.parseInt(replyInfo.get("replyDepth")))
				.parentId(Integer.parseInt(replyInfo.get("parentId")))
				.replyOrder(Integer.parseInt(replyInfo.get("replyOrder"))).regdate(new Date()).editdate(new Date())
				.build();

		Optional<Board> board = boardRepository.findByBoardId(Integer.parseInt(replyInfo.get("boardId")));
		if(board.isPresent()) {
			board.get().setReplyCount(board.get().getReplyCount()+1);
			
			Optional<User> user = userRepository.findByUserId(uid);
			if(user.isPresent()) {
				reply.setUser(user.get());
				replyRepository.save(reply);
				return reply;
			}else {
				return null;
			}
		}else {
			return null;
		}
	}

	@Override
	@Transactional
	public Reply update(Map<String, String> replyInfo) {
		Optional<Reply> reply = replyRepository.findByReplyId(Integer.parseInt(replyInfo.get("replyId")));

		if (!reply.isPresent()) {
			return null;
		}else {
			reply.get().setContent(replyInfo.get("content"));
			reply.get().setEditdate(new Date());
			return reply.get();
		}
	}

	@Override
	@Transactional
	public Long delete(int reply_id) {
		Optional<Reply> comment = replyRepository.findByReplyId(reply_id);
		if(comment.isPresent()) {
			int boardId = comment.get().getBoardId();
			Optional<Board> board = boardRepository.findByBoardId(boardId);
			if(board.isPresent()) {
				board.get().setReplyCount(board.get().getReplyCount()-1);
				Long ret = replyRepository.deleteByReplyId(reply_id);
				return ret;
				
			}else {
				return null;
			}
		}else {
			return null;
		}
	}

	@Override
	public List<Reply> findReplyByBoardId(int boardId) {
		List<Reply> reply = replyRepository.findAllByBoardId(boardId);
		return reply;
	}
}
