package kr.co.rvm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rvm.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
