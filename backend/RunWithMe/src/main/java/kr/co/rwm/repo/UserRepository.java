package kr.co.rwm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByUid(Integer userId);

}
