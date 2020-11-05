package kr.co.rwm.service;

import java.util.List;
import java.util.Map;

import kr.co.rwm.entity.Friend;
import kr.co.rwm.entity.User;

public interface FriendService {
	List<User> list(int uid);

	Friend insert(int uid, Map<String, Integer> friendInfo);

	Long delete(int uid, Map<String, Integer> friendInfo);
}
