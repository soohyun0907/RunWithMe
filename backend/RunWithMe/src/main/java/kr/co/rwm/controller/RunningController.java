package kr.co.rwm.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;
import kr.co.rwm.entity.User;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.repo.RecordTempRepository;
import kr.co.rwm.service.RanksService;
import kr.co.rwm.service.RecordService;
import kr.co.rwm.service.S3Service;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/runnings")
public class RunningController {
	
	private final RecordTempRepository recordTempRepository;
	private final RecordService recordService;
	private final RanksService rankService;
	private final S3Service s3Service;

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
		User loginUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		record.setUserId(loginUser);
		recordTempRepository.setUserRecord(record);
		
		return new ResponseEntity<String>(ResponseMessage.RUNNING_GPS_SUCCESS, HttpStatus.CREATED);
	}
	
	// swipe했을 때 redis에 있던 record를 보내준다.
	@GetMapping("/temp/{userId}")
	public ResponseEntity getTempRecord(@PathVariable int userId) {
		System.out.println("running/controller/temp/getRecord");
		User loginUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
//		List<Record> records = recordTempRepository.findRecordByUserId(userId);	// 토큰X
		List<Record> records = recordTempRepository.findRecordByUserId(loginUser.getUserId());	// 토큰O 추후에 이렇게 바꿀것
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.RUNNING_GPS_SUCCESS, records), HttpStatus.OK);
	}
	
	
	// stop 눌렀을 때 redis에 있던 record를 꺼내서 db에 저장한다.
	@PostMapping
	public ResponseEntity saveStopRecord(@RequestBody Map<String, Object> runningInfo){
		System.out.println("gps/contoller/record");
		User loginUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		// 1. running 저장
		Running savedRunning = recordService.saveRunning(runningInfo, loginUser.getUserId());
		
		// 2. redis에서 records 조회 + 삭제 + running의 마지막 값으로 마지막 record 추가
		List<Record> records = recordTempRepository.findRecordByUserId(loginUser.getUserId());
		recordTempRepository.deleteByUserId(loginUser.getUserId(), (int) savedRunning.getAccDistance());
		Record lastRecord = Record.builder()
								.userId(loginUser)
								.accDistance(savedRunning.getAccDistance())
								.accTime(savedRunning.getAccTime())
								.build();
		records.add(lastRecord);
		
		// 3. records 저장
		int runningId = savedRunning.getRunningId();
		recordService.saveAllRecord(runningId, records);
		
		// 4. 달린 지역 저장
		List<Gugun> gugunList = recordService.saveAllGugun(savedRunning, (List<String>) runningInfo.get("gugun"));
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("running", savedRunning);
		map.put("records", records);
		map.put("area", gugunList);
		
		System.out.println(loginUser.getUserId()+" 저장 "+runningId);
		rankService.getRaceExp(loginUser.getUserId(), runningId);
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.RUNNING_GPS_SUCCESS, map), HttpStatus.OK);
	}
	
	// 해당 running에 대한 기록을 보고싶을 때 running기록과 records를 쭉 보내준다.
	@GetMapping("/records/{runningId}")
	public ResponseEntity findRecordsByRunningId(@PathVariable int runningId) {
		System.out.println("gps/controller/get");
		Running running = recordService.findRunningById(runningId);
		List<Record> records = recordService.findAllRecordByRunningId(running);
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("running", running);
		map.put("records", records); 
		
		return new ResponseEntity<Response>(new
				Response(StatusCode.OK, ResponseMessage.RUNNING_GPS_SUCCESS, map), HttpStatus.OK);
	}
	
	// running 썸네일 이미지 저장
	@PostMapping("/{runningId}")
	public ResponseEntity saveRunningImage(@PathVariable int runningId, MultipartFile file) {
		
		if(file == null) {
			return new ResponseEntity<Response>(
					new Response(StatusCode.FORBIDDEN, ResponseMessage.UPDATE_THUMBNAIL_FAIL), HttpStatus.FORBIDDEN);
		}
		
		String url = s3Service.thumbnailUpload(file);
		if (url != null) {
			recordService.updateRunningImage(runningId, url);
			return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.UPDATE_THUMBNAIL_SUCCESS, url),
					HttpStatus.OK);
		} else {
			return new ResponseEntity<Response>(
					new Response(StatusCode.FORBIDDEN, ResponseMessage.UPDATE_THUMBNAIL_FAIL), HttpStatus.FORBIDDEN);
		}
		
	}

}
