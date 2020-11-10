package kr.co.rwm.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
	public Friend insert(int uid, int friendId) {
		
		Friend relation = Friend.builder()
						.userId(uid)
						.build();
		
		User user = userRepository.findByUserId(friendId).orElse(null);
		if(user == null) return null;
		
		relation.setUser(user);
		Friend result = friendRepository.save(relation);	 
		
		return result;
	}

	@Override
	@Transactional
	public Long delete(int uid, int friendId) {
		System.out.println(friendId);
		Optional<User> friend = userRepository.findByUserId(friendId);
		if(!friend.isPresent()) return -1L;
		
		Long ret = friendRepository.deleteByUserIdAndUserUserId(uid, friendId);
		return ret;
	}

	@Override
	public boolean findByUserIdAndFriendId(int uid, int friendId) {
		Optional<Friend> friend = friendRepository.findByUserIdAndUserUserId(uid, friendId);
		if(friend.isPresent()) return true;
		else return false;
	}
	
}
