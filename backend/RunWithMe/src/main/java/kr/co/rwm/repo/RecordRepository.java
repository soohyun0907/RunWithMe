package kr.co.rwm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;

public interface RecordRepository extends JpaRepository<Record, Integer>{
	
	List<Record> findAllByUserId(int userId);
	
	List<Record> findAllRecordByRunningId(int runningId);
	
	List<Record> findAllRecordByRunningId(Running running);
	
}
