package kr.co.rwm.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.repo.RecordTempRepository;
import kr.co.rwm.service.RecordService;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/runnings")
public class RunningController {
	
	private final RecordTempRepository recordTempRepository;
	private final RecordService recordService;

	// 회원의 id로 모든 running을 조회: 프로필에서 약식으로 뜨는 것
	@GetMapping("/{userId}")
	public ResponseEntity getRunnings(@PathVariable int userId) {
		System.out.println("gps/controller/get");
		List<Running> userRunnings = recordService.findRunningByUserId(userId);
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.RUNNING_GPS_SUCCESS, userRunnings), HttpStatus.OK);
	}
	
	// redis에 userid를 key로 km당 기록을 저장한다.
	@PostMapping("/temp")
	public ResponseEntity<String> saveRecord(@RequestBody Record record){
		System.out.println("running/controller/temp/record");
		recordTempRepository.setUserRecord(record);
		
		return new ResponseEntity<String>(ResponseMessage.RUNNING_GPS_SUCCESS, HttpStatus.CREATED);
	}
	
	// swipe했을 때 redis에 있던 record를 보내준다.
	@GetMapping("/temp/{userId}")
	public ResponseEntity getTempRecord(@PathVariable int userId) {
		System.out.println("running/controller/temp/getRecord");
		List<Record> records = recordTempRepository.findRecordByUserId(userId);
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.RUNNING_GPS_SUCCESS, records), HttpStatus.OK);
	}
	
	
	// stop 눌렀을 때 redis에 있던 record를 꺼내서 db에 저장한다.
	@PostMapping
	public ResponseEntity saveStopRecord(@RequestBody Running running){
		System.out.println("gps/contoller/record");
		/**
		 * user_id
		 * running 먼저 저장
		 * records를 running의 key를 이용해서 저장
		 * redis에 있는거랑, 마지막 records 저장해야함
		 * redis에 있는 기록 다 지우기
		 */
		int userId = running.getUserId();
		
		Running savedRunning = recordService.saveRunning(running);
		int runningId = savedRunning.getRunningId();
		List<Record> records = recordTempRepository.findRecordByUserId(userId);
		recordTempRepository.deleteByUserId(userId, (int) running.getAccDistance());
		Record lastRecord = Record.builder()
								.userId(userId)
								.accDistance(running.getAccDistance())
								.accTime(running.getAccTime())
								.build();
		records.add(lastRecord);
		recordService.saveAllRecord(runningId, records);
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("running", savedRunning);
		map.put("records", records);
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.RUNNING_GPS_SUCCESS, map), HttpStatus.OK);
	}
	
	// 해당 running에 대한 기록을 보고싶을 때 running기록과 records를 쭉 보내준다.
	@GetMapping("/records/{runningId}")
	public ResponseEntity findRecordsByRunningId(@PathVariable int runningId) {
		System.out.println("gps/controller/get");
		Running running = recordService.findRunningById(runningId);
		List<Record> records = recordService.findAllRecordByRunningId(runningId);
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("running", running);
		map.put("records", records); 
		
		return new ResponseEntity<Response>(new
				Response(StatusCode.OK, ResponseMessage.RUNNING_GPS_SUCCESS, map), HttpStatus.OK);
	}

}
