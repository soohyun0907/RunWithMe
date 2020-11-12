package kr.co.rwm.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Collections;
import java.util.Comparator;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Ranks;
import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;
import kr.co.rwm.entity.RunningArea;
import kr.co.rwm.entity.RunningUser;
import kr.co.rwm.entity.User;
import kr.co.rwm.repo.GugunRepository;
import kr.co.rwm.repo.RanksRepository;
import kr.co.rwm.repo.RecordRepository;
import kr.co.rwm.repo.RunningAreaRepository;
import kr.co.rwm.repo.RunningRepository;
import kr.co.rwm.repo.RunningUserRepository;
import kr.co.rwm.repo.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class RecordServiceImpl implements RecordService {

	private final UserRepository userRepository;
	private final RecordRepository recordRepository;
	private final RunningRepository runningRepository;
	private final GugunRepository gugunRepository;
	private final RunningAreaRepository runningAreaRepository;
	private final RunningUserRepository runningUserRepository;
	
	@Autowired
	RanksRepository rankRepository;

	@Override
	public void saveRecord(Record record) {
		recordRepository.save(record);
	}
	
	@Override
	public void saveAllRecord(int runningId, List<Record> records) {
		Running running = runningRepository.findByRunningId(runningId)
				.orElseThrow(() -> new IllegalArgumentException("해당 런닝이 없습니다."));
		
		ArrayList<Record> recordList = new ArrayList<Record>();
		recordList.addAll(records);
		Collections.sort(recordList, new Comparator<Record>() {
			@Override
			public int compare(Record o1, Record o2) {
				return (int) (o1.getAccDistance() - o2.getAccDistance());
			}
		});
		
		for(Record record: recordList) {
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
								.polyline(String.valueOf(runningInfo.get("polyline")))
								.thumbnail(String.valueOf(runningInfo.get("thumbnail")))
								.accDistance(Double.parseDouble(String.valueOf(runningInfo.get("accDistance"))))
								.accTime(Long.parseLong(String.valueOf(runningInfo.get("accTime"))))
								.startTime(LocalDateTime.parse((CharSequence) runningInfo.get("startTime"), formatter))
								.endTime(LocalDateTime.parse((CharSequence) runningInfo.get("endTime"), formatter))
								.build();
								
		return runningRepository.save(running);
	}

	@Override
	public List<Running> findRunningByUserId(int userId) {
		return runningRepository.findAllByUserIdOrderByStartTimeDesc(userId);
	}

	@Override
	public Running findRunningById(int runningId) {
		Optional<Running> running = runningRepository.findByRunningId(runningId);
		if(running.isPresent()) {
			return running.get();
		}else {
			return null;
		}
	}

	@Override
	public List<Record> findAllRecordByRunningId(Running runningId) {
		return recordRepository.findAllRecordByRunningId(runningId);
	}
	
	@Override
	@Transactional
	public Long deleteRunningByUserId(int userId, int runningId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if(users.isPresent()) {
			User user = users.get();
			Optional<Running> runnings = runningRepository.findByRunningId(runningId);
			if(runnings.isPresent()) {
				Running running = runnings.get();
				RunningUser runningUser = runningUserRepository.findByUserId(user);
				runningUser.setTotalCount(runningUser.getTotalCount()-1);
				runningUser.setTotalDistance(runningUser.getTotalDistance()-running.getAccDistance());
				runningUser.setTotalTime(runningUser.getTotalTime()-running.getAccTime());
				runningUserRepository.save(runningUser);
				
				return runningRepository.deleteByRunningId(runningId);
			}else {
				return null;
			}
		}else {
			return null;
		}
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

	@Override
	public List<Running> findAllRunningByGugunIdAndUserId(int gugunId, int userId) {
		List<Running> userRunning = runningRepository.findAllByUserIdOrderByStartTimeDesc(userId);
		List<Running> runningList = new ArrayList<Running>();
		for(Running running: userRunning) {
			if(running.getRunningArea().stream().anyMatch(x -> x.getGugun().getGugunId()==gugunId))
				runningList.add(running);
		}
		return runningList; 
	}

	@Override
	public List<Running> findRunningByFriendsId(List<User> friends) {
		List<Running> runnings = new ArrayList<Running>();
		for(User friend: friends) {
			List<Running> temp = runningRepository.findAllByUserIdOrderByStartTimeDesc(friend.getUserId());
			if(temp.isEmpty()) runnings.add(null);
			else runnings.add(temp.get(0));
		}
		return runnings;
	}

	@Override
	public void join(User user) {
		RunningUser runningUser = RunningUser.builder()
											.userId(user)
											.totalDistance(0)
											.totalTime(0L)
											.totalCount(0)
											.build();
		
		runningUserRepository.save(runningUser);
	}

	@Override
	public RunningUser findRunningUserByUserId(int userId) {
		User user = userRepository.findByUserId(userId).orElse(null);
		if(user==null) return null;
		return runningUserRepository.findByUserId(user);
	}

	@Override
	public List<RunningUser> findAllRunningUserByUserId(List<User> users) {
		List<RunningUser> runningUsers = new ArrayList<RunningUser>();
		for(User user: users) {
			runningUsers.add(runningUserRepository.findByUserId(user));
		}
		return runningUsers;
	}

	@Override
	public RunningUser updateRunningUser(User user, Running running) {
		RunningUser runningUser = runningUserRepository.findByUserId(user);
		runningUser.setTotalCount(runningUser.getTotalCount()+1);
		runningUser.setTotalDistance(runningUser.getTotalDistance()+running.getAccDistance());
		runningUser.setTotalTime(runningUser.getTotalTime()+running.getAccTime());
		
		return runningUserRepository.save(runningUser);
	}

	@Override
	public List<Running> findAllRunningByActivityArea(int userId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if(users.isPresent()) {
			User user = users.get();
			int gugunId = user.getGugunId().getGugunId();
			
			List<Running> runningList = new ArrayList<Running>();
			List<Running> userRunning = runningRepository.findAllByUserIdOrderByStartTimeDesc(userId);
			for(Running running: userRunning) {
				if(running.getRunningArea().stream().anyMatch(x -> x.getGugun().getGugunId()==gugunId))
					runningList.add(running);
			}
			
			return runningList;
			
		}else {
			return null;
		}
	}

	@Override
	public List<RunningUser> findRunningUserByUserIdAndUserId(int userId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if(users.isPresent()) {
			User user = users.get();
			int gugunId = user.getGugunId().getGugunId();
			List<RunningUser> runningUsers = new ArrayList<RunningUser>();
			
			List<RunningUser> runningUserList = runningUserRepository.findAll();
			for(RunningUser ru: runningUserList) {
				if(ru.getUserId().getGugunId().getGugunId() == gugunId) {
					if(ru.getUserId().getUserId() == userId) continue;
					runningUsers.add(ru);
				}
			}
			return runningUsers;
			
		}else {
			return null;
		}
	}

	@Override
	public List<Record> convertRecords(Map<String, Object> runningInfo, User loginUser) {
		// TODO Auto-generated method stub
		List<Map<String, String>> recordList = (List<Map<String, String>>) runningInfo.get("records");
		
		List<Record> records = new ArrayList<Record>();
		for(Map<String, String> map: recordList) {
			Record record = Record.builder()
					.userId(loginUser)
					.accDistance(Double.parseDouble(map.get("accDistance")))
					.accTime(Long.parseLong(map.get("accTime")))
					.speed(Double.parseDouble(map.get("speed")))
					.build();
			
			records.add(record);
		}
		
		return records;
	}
	
	
	
}
