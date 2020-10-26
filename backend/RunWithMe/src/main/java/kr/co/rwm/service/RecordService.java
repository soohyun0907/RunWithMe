package kr.co.rwm.service;

import java.util.List;

import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;

public interface RecordService {
	
	public void saveRecord(Record record);
	
	public void saveAllRecord(int runningId, List<Record> records);
	
	public List<Record> findAllRecordByUserId(int userId);
	
	public List<Record> findAllRecordByRunningId(int runningId);
	
	public Running saveRunning(Running running);
	
	public List<Running> findRunningByUserId(int userId);
	
	public Running findRunningById(int runningId);
	
	public void updateRunningImage(int runningId, String url);
	
}
