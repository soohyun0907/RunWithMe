package kr.co.rwm.service;

import java.util.Collections;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Payment;
import kr.co.rwm.entity.User;
import kr.co.rwm.repo.PaymentRepository;
import kr.co.rwm.repo.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService {

	private final UserRepository userRepository;
	private final PaymentRepository payRepository;
	private final int INIT_MILEAGE = 0;
	@Override
	public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
		System.out.println(userEmail);
		return userRepository.findByUserEmail(userEmail)
				.orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
	}

	@Transactional
	public Optional<User> findByUserEmail(String userEmail) {
		return userRepository.findByUserEmail(userEmail);
	}

	public User join(User user, String password) {
		return userRepository.save(User.builder().gugunId(user.getGugunId()).gender(user.getGender()).userEmail(user.getUserEmail())
				.userName(user.getUsername()).userPw(password).mileage(INIT_MILEAGE).roles(Collections.singletonList("USER")).build());
	}

	public Optional<User> findByUserId(int userId) {
		return userRepository.findByUserId(userId);
	}

	@Transactional
	public void delete(String userEmail) {
		userRepository.deleteByUserEmail(userEmail);
	}

	public void update(Optional<User> user,User changeUser) {
		User temp = user.get();
		user.ifPresent(selectUser->{
			selectUser.setUserId(temp.getUserId());
			selectUser.setUserPw(changeUser.getChangePw());
			selectUser.setGender(temp.getGender());
			selectUser.setUserName(changeUser.getUsername());
			selectUser.setProfile(changeUser.getProfile());
			selectUser.setGugunId(changeUser.getGugunId());
			userRepository.save(selectUser);
		});
	}
	
	public void charge(int uid,int money) {
		Optional<User> user = userRepository.findByUserId(uid);
		int total = user.get().getMileage() + money;
 		user.ifPresent(selectUser->{
			selectUser.setMileage(total);
			userRepository.save(selectUser);
		});
 		payRepository.save(Payment.builder().chargeMoney(money).userId(user.get()).build());
	}
	
	public boolean pay(long uid,int money) {
		Optional<User> user = userRepository.findById(uid);
		if(user.get().getMileage() < money) { // 결제를 할 수 없는 경우
			return false;
			
		}else {
			int total = user.get().getMileage() - money;
			user.ifPresent(selectUser->{
				selectUser.setMileage(total);
				userRepository.save(selectUser);
			});
			payRepository.save(Payment.builder().payMoney(money).userId(user.get()).build());
			return true;
		}
	}
}
