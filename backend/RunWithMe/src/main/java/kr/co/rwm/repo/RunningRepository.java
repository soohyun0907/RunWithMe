package kr.co.rwm.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Running;

public interface RunningRepository extends JpaRepository<Running, Long> {
	
	List<Running> findAllByUserIdOrderByStartTimeDesc(int userId);

	Optional<Running> findByRunningId(int runningId);
	
	Running getOneByUserIdOrderByStartTimeDesc(int userId);
	
}
