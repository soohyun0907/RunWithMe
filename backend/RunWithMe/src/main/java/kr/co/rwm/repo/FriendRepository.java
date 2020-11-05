package kr.co.rwm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Friend;

public interface FriendRepository extends JpaRepository<Friend, Long>{

	List<Friend> findByUserId(int uid);

	Long deleteByUserIdAndUserUserId(int uid, Integer integer);
	
}
