package kr.co.rwm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{
	
	List<Record> findAllByUserId(int userId);
	
	List<Record> findAllByRunningId(int runningId);
	
}
