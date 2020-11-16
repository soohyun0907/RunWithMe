package kr.co.rwm.service;

import java.util.List;

import kr.co.rwm.entity.Friend;
import kr.co.rwm.entity.Ranks;
import kr.co.rwm.entity.User;

public interface FriendService {
	List<User> list(int uid);

	List<Ranks> contactList(int uid);

	Friend insert(int uid, int friendId);

	Long delete(int uid, int friendId);

	List<User> match(int uid, String gender);

	boolean findByUserIdAndFriendId(int uid, int friendId);

	List<User> onlineList(int uid);

	List<User> offlineList(int uid);

	List<User> analysis(int uid, String gender);
}
