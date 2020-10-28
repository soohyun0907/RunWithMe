package kr.co.rwm.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;
import kr.co.rwm.entity.RunningArea;
import kr.co.rwm.repo.GugunRepository;
import kr.co.rwm.repo.RecordRepository;
import kr.co.rwm.repo.RunningAreaRepository;
import kr.co.rwm.repo.RunningRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class RecordServiceImpl implements RecordService {

	private final RecordRepository recordRepository;
	private final RunningRepository runningRepository;
	private final GugunRepository gugunRepository;
	private final RunningAreaRepository runningAreaRepository;
	
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
	public Running saveRunning(Map<String, Object> runningInfo, int userId) {
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
		Running running = Running.builder()
								.userId(userId)
								.accDistance((double) runningInfo.get("accDistance"))
								.accTime(((Number) runningInfo.get("accTime")).longValue())
								.startTime(LocalDateTime.parse((CharSequence) runningInfo.get("startTime"), formatter))
								.endTime(LocalDateTime.parse((CharSequence) runningInfo.get("endTime"), formatter))
								.build();
								
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

	@Override
	public List<Gugun> saveAllGugun(Running savedRunning, List<String> guguns) {
		List<Gugun> gugunList = new ArrayList<Gugun>();
		for(String gugunName: guguns) {
			Gugun gugun = gugunRepository.findByGugunName(gugunName);
			RunningArea runningArea = RunningArea.builder()
												.gugun(gugun)
												.running(savedRunning)
												.build();
			runningAreaRepository.save(runningArea);
			gugunList.add(gugun);
		}
		
		return gugunList;
	}

	
}
