package kr.co.rwm.repo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

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
		hashOpsRecord.put(String.valueOf(record.getUserId().getUserId()), km, record);
	}
	
	// userId로 조회
	public List<Record> findRecordByUserId(int userId) {
		Map<Integer, Record> map = hashOpsRecord.entries(String.valueOf(userId));
		// 키로 정렬
		Object[] mapkey = map.keySet().toArray();
		Arrays.sort(mapkey);

		List<Record> records = new ArrayList<Record>();
		for (Integer nKey : map.keySet())
		{
			records.add(map.get(nKey));
		}

		Collections.sort(records, new Comparator<Record>() {
			@Override
			public int compare(Record o1, Record o2) {
				return (int) (o1.getAccDistance() - o2.getAccDistance());
			}
		});
		
		return records;
	}
	
	public void deleteByUserId(int userId, int km) {
		for(int i=1; i<km+1; i++) {
			hashOpsRecord.delete(String.valueOf(userId), i);
		}
	}
}
