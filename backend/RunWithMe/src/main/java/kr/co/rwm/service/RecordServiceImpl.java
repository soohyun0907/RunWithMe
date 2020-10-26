package kr.co.rwm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;
import kr.co.rwm.repo.RecordRepository;
import kr.co.rwm.repo.RunningRepository;

@Service
public class RecordServiceImpl implements RecordService {

	@Autowired
	RecordRepository recordRepository;
	@Autowired
	RunningRepository runningRepository;
	
	@Override
	public void saveRecord(Record record) {
		recordRepository.save(record);
	}
	
	@Override
	public void saveAllRecord(int runningId, List<Record> records) {
		for(Record record: records) {
			record.setRunningId(runningId);
			recordRepository.save(record);
		}
	}
	
	@Override
	public List<Record> findAllRecordByUserId(int userId) {
		return recordRepository.findAllByUserId(userId);
	}

	@Override
	public Running saveRunning(Running running) {
		return runningRepository.save(running);
	}

	@Override
	public List<Running> findRunningByUserId(int userId) {
		return runningRepository.findAllByUserId(userId);
	}

	@Override
	public Running findRunningById(int runningId) {
		return runningRepository.findByRunningId(runningId).get();
	}

	@Override
	public List<Record> findAllRecordByRunningId(int runningId) {
		return recordRepository.findAllByRunningId(runningId);
	}

	@Override
	public void updateRunningImage(int runningId, String url) {
		Optional<Running> updateRunning = runningRepository.findByRunningId(runningId);
		updateRunning.ifPresent(selectRunning -> {
			selectRunning.setThumbnail(url);
			runningRepository.save(selectRunning);
		});
	}

	
}
