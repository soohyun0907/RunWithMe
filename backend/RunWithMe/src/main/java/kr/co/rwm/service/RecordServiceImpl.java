package kr.co.rwm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;
import kr.co.rwm.repo.RecordRepository;
import kr.co.rwm.repo.RunningRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class RecordServiceImpl implements RecordService {

	private final RecordRepository recordRepository;
	private final RunningRepository runningRepository;
	
	@Override
	public void saveRecord(Record record) {
		recordRepository.save(record);
	}
	
	@Override
	public void saveAllRecord(int runningId, List<Record> records) {
		Running running = runningRepository.findByRunningId(runningId)
				.orElseThrow(() -> new IllegalArgumentException("해당 런닝이 없습니다."));
		for(Record record: records) {
			record.setRunningId(running);
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
		return recordRepository.findAllRecordByRunningId(runningId);
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
