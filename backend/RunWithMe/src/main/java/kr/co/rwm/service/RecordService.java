package kr.co.rwm.service;

import java.util.List;
import java.util.Map;

import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;

public interface RecordService {
	
	public void saveRecord(Record record);
	
	public void saveAllRecord(int runningId, List<Record> records);
	
	public List<Record> findAllRecordByUserId(int userId);
	
	public List<Record> findAllRecordByRunningId(Running running);
	
	public Running saveRunning(Map<String, Object> runningInfo, int userId);
	
	public List<Running> findRunningByUserId(int userId);
	
	public Running findRunningById(int runningId);
	
	public void updateRunningImage(int runningId, String url);

	public List<Gugun> saveAllGugun(Running savedRunning, List<String> guguns);

	public List<Running> findAllRunningByGugunIdAndUserId(int gugunId, int userId);
	
}
