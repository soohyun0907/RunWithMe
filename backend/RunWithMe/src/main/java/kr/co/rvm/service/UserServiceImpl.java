package kr.co.rvm.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rvm.entity.User;
import kr.co.rvm.repo.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public void join(Map<String, String> userInfo) {
		
		User user = User.builder()
							.dongId(Integer.parseInt(userInfo.get("dongId")))
							.userName(userInfo.get("userName"))
							.userPw(userInfo.get("userPw"))
							.build();
		userRepository.save(user);
	}

	
}
