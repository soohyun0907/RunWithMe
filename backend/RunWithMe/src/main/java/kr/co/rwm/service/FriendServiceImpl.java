package kr.co.rwm.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
		for (Friend friend : list) {
			System.out.println(friend.getFId());
			contactsList.add(friend.getUser());
		}
		
		return contactsList;
	}

	@Override
	public void insert(Map<String, Integer> friendInfo) {
		
		Friend relation = Friend.builder()
						.userId(friendInfo.get("uId"))
						.build();
		
		User user = userRepository.findByUid(friendInfo.get("userUid"));
		relation.setUser(user);
		friendRepository.save(relation);	 
		//return friendRepository.findAll(); 
	}
	
	
	
}
