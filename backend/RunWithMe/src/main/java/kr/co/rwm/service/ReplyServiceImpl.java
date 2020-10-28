package kr.co.rwm.service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Reply;
import kr.co.rwm.entity.User;
import kr.co.rwm.repo.ReplyRepository;
import kr.co.rwm.repo.UserRepository;

@Service
public class ReplyServiceImpl implements ReplyService{

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
		
		Reply reply = Reply.builder()
				.boardId(Integer.parseInt(replyInfo.get("boardId")))
				.content(replyInfo.get("content"))
				.replyDepth(Integer.parseInt(replyInfo.get("replyDepth")))
				.parentId(Integer.parseInt(replyInfo.get("parentId")))
				.replyOrder(Integer.parseInt(replyInfo.get("replyOrder")))
				.regdate(new Date())
				.editdate(new Date())
				.build();
		
		Optional<User> user = userRepository.findByUserId(uid);
		reply.setUser(user.get());
		replyRepository.save(reply);
		return reply;
	}

	@Override
	@Transactional
	public Reply update(Map<String, String> replyInfo) {
		Optional<Reply> reply = replyRepository.findByReplyId(Integer.parseInt(replyInfo.get("replyId")));
		 
		if(!reply.isPresent()) {
			return null;
		}
		reply.get().setContent(replyInfo.get("content"));
		reply.get().setEditdate(new Date());
		return reply.get();
	}

	@Override
	@Transactional
	public Long delete(int reply_id) {
		Long ret = replyRepository.deleteByReplyId(reply_id);
		return ret;
	}
	
}
