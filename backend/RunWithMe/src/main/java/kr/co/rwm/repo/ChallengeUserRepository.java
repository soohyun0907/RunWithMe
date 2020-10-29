package kr.co.rwm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Challenge;
import kr.co.rwm.entity.ChallengeUser;
import kr.co.rwm.entity.User;

public interface ChallengeUserRepository extends JpaRepository<ChallengeUser, Long> {

	List<ChallengeUser> findAllByUserId(User user);

	List<ChallengeUser> findAllByChallengeId(Challenge challenge);

}
