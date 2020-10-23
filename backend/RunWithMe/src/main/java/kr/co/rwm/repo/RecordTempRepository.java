package kr.co.rwm.repo;

import java.util.Collections;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.data.redis.core.HashOperations;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Record;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class RecordTempRepository {
	// userId, km, record
	@Resource(name = "redisTemplate")
    private HashOperations<String, Integer, Record> hashOpsRecord;
	
	// userId로 저장
	public void setUserRecord(Record record) {
		int km = (int) record.getAccDistance();
		
		System.out.println(record.toString()+" "+km);
		hashOpsRecord.put(String.valueOf(record.getUserId()), km, record);
	}
	
	// userId로 조회
	public List<Record> findRecordByUserId(int userId) {
		return hashOpsRecord.values(String.valueOf(userId));
	}
	
	public void deleteByUserId(int userId, int km) {
		for(int i=1; i<km+1; i++) {
			hashOpsRecord.delete(String.valueOf(userId), i);
		}
	}
}
