package kr.co.rwm.service;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.User;
import kr.co.rwm.repo.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService {

	private final UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
		return userRepository.findByUserEmail(userEmail).orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
	}

	@Transactional
	public Optional<User> findByUserEmail(String userEmail) {
		System.out.println(userEmail);
		return userRepository.findByUserEmail(userEmail);
	}
	

}
