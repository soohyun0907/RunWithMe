package kr.co.rwm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.RunningUser;
import kr.co.rwm.entity.User;

public interface RunningUserRepository extends JpaRepository<RunningUser, Long> {

	RunningUser findByUserId(User user);
	void deleteByUserId(User user);

}
