package kr.co.rwm.repo;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Friend;
import kr.co.rwm.entity.User;

public interface FriendRepository extends JpaRepository<Friend, Long>{

	List<Friend> findByUserId(int uid);

	@Transactional
	Long deleteByUserIdAndUserUserId(int uid, int friend);

	Optional<Friend> findByUserIdAndUserUserId(int uid, int friend);
	
}
