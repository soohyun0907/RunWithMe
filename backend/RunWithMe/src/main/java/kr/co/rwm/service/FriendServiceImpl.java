package kr.co.rwm.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Friend;
import kr.co.rwm.entity.User;
import kr.co.rwm.repo.FriendRepository;
import kr.co.rwm.repo.UserRepository;

@Service
public class FriendServiceImpl implements FriendService {

	@Autowired
	FriendRepository friendRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public List<User> list(int uid) {
		List<Friend> list =  friendRepository.findByUserId(uid);
		List<User> contactsList = new ArrayList<User>();
		System.out.println("uid: " + uid);
		for (Friend friend : list) {
			//System.out.println(friend.getUser().getUsername());
			contactsList.add(friend.getUser());
		}
		
		return contactsList;
	}

	@Override
	public Friend insert(int uid, Map<String, Integer> friendInfo) {
		
		Friend relation = Friend.builder()
						.userId(uid)
						.build();
		
		User user = userRepository.findByUserId(friendInfo.get("friendId"));
		relation.setUser(user);
		Friend result = friendRepository.save(relation);	 
		return result;
	}

	@Override
	@Transactional
	public Long delete(int uid, Map<String, Integer> friendInfo) {

		Long ret = friendRepository.deleteByUserIdAndUserUserId(uid, friendInfo.get("friendId"));
		return ret;
	}
	
	
	
	
}
