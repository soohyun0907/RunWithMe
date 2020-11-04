package kr.co.rwm.repo;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Challenge;

public interface ChallengeRepository extends JpaRepository<Challenge, Long>{

	void deleteByChallengeId(int challengeId);

	Optional<Challenge> findByChallengeId(int challengeId);

	List<Challenge> findAllByEndTimeGreaterThanEqual(LocalDateTime today);

	List<Challenge> findAllByEndTimeLessThanEqual(LocalDateTime today);

	List<Challenge> findAllByEndTime(LocalDateTime yesterday);

	List<Challenge> findAllByStartTimeGreaterThan(LocalDateTime startTime);
}
