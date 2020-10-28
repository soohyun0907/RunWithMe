package kr.co.rwm.service;

import java.util.List;
import java.util.Map;

import kr.co.rwm.entity.Reply;

public interface ReplyService {

	List<Reply> allReplyList();

	Reply save(int uid, Map<String, String> replyInfo);

	Reply update(Map<String, String> replyInfo);

	Long delete(int reply_id);


}
