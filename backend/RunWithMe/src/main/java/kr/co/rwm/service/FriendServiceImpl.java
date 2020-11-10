package kr.co.rwm.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Friend;
import kr.co.rwm.entity.Ranks;
import kr.co.rwm.entity.User;
import kr.co.rwm.repo.FriendRepository;
import kr.co.rwm.repo.RanksRepository;
import kr.co.rwm.repo.UserRepository;

@Service
public class FriendServiceImpl implements FriendService {

	@Autowired
	FriendRepository friendRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RanksRepository rankRepository;

	
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
	public List<User> match(int uid, String gender) {
		User user = userRepository.findByUserId(uid).get();
		int dong = user.getGugunId().getGugunId();
		int sex;
		if(gender.equals("male"))
			sex = 0;
		else
			sex = 1;
		int tier = rankRepository.findByUserId(user).get().getTier();

		List<Ranks> userList = rankRepository.findByTier(tier);
		List<User> result = new ArrayList<User>();
		for (Ranks ranks : userList) {
			if(ranks.getUserId().getGender() == sex && ranks.getUserId().getGugunId().getGugunId() == dong && ranks.getUserId().getUserId() != uid)
				result.add(ranks.getUserId());
		}
		
		return result;
	}



	@Override
	public Friend insert(int uid, Map<String, Integer> friendInfo) {
		
		Friend relation = Friend.builder()
						.userId(uid)
						.build();
		
		User user = userRepository.findByUserId(friendInfo.get("friendId"));
		relation.setUser(user);
		Friend result = friendRepository.save(relation);	 
		
		
		Friend relation2 = Friend.builder()
				.userId(friendInfo.get("friendId"))
				.build();
		User diff = userRepository.findByUserId(uid).get();
		relation2.setUser(diff);
		
		friendRepository.save(relation2);	 
		
		return result;
	}

	@Override
	@Transactional
	public Long delete(int uid, Map<String, Integer> friendInfo) {

		Long ret = friendRepository.deleteByUserIdAndUserUserId(uid, friendInfo.get("friendId"));
		return ret;
	}
	
	
	
	
}
