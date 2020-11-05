package kr.co.rwm.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByUserEmail(String userEmail);
	User findByUserId(Integer userId);
	List<User> findByUserName(String userName);
	Optional<User> findByUserId(int userId);
	void deleteByUserEmail(String userEmail);
}
