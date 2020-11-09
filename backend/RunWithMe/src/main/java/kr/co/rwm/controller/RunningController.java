package kr.co.rwm.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.annotations.ApiOperation;
import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;
import kr.co.rwm.entity.RunningArea;
import kr.co.rwm.entity.RunningUser;
import kr.co.rwm.entity.User;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.repo.RecordTempRepository;
import kr.co.rwm.service.ChallengeService;
import kr.co.rwm.service.FriendService;
import kr.co.rwm.service.JwtTokenProvider;
import kr.co.rwm.service.RanksService;
import kr.co.rwm.service.RecordService;
import kr.co.rwm.service.S3Service;
import kr.co.rwm.service.UserService;
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
	private final ChallengeService challengeService;
	private final JwtTokenProvider jwtTokenProvider;
	private final FriendService friendService;

	// 회원의 id로 모든 running을 조회: 프로필에서 약식으로 뜨는 것
	@GetMapping("/{userId}")
	public ResponseEntity getRunnings(@PathVariable int userId) {
		System.out.println("gps/controller/get");
		List<Running> userRunnings = recordService.findRunningByUserId(userId);
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.RUNNING_LIST_SUCCESS, userRunnings), HttpStatus.OK);
	}
	
	// redis에 userid를 key로 km당 기록을 저장한다.
	@PostMapping("/temp")
	public ResponseEntity saveRecord(@RequestBody Record record, HttpServletRequest request){
		System.out.println("running/controller/temp/record");
		String token = request.getHeader("AUTH");
		if(jwtTokenProvider.validateToken(token)) {
			User loginUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			record.setUserId(loginUser);
			recordTempRepository.setUserRecord(record);
			
			return new ResponseEntity<String>(ResponseMessage.RECORD_REDIS_INSERT_SUCCESS, HttpStatus.CREATED);
		
		}else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED),
					HttpStatus.FORBIDDEN);
		}
	}
	
	// swipe했을 때 redis에 있던 record를 보내준다.
	@GetMapping("/temp/{userId}")
	public ResponseEntity getTempRecord(@PathVariable int userId, HttpServletRequest request) {
		System.out.println("running/controller/temp/getRecord");
		String token = request.getHeader("AUTH");
		if(jwtTokenProvider.validateToken(token)) {
			User loginUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			
			List<Record> records = recordTempRepository.findRecordByUserId(loginUser.getUserId());	// 토큰O 추후에 이렇게 바꿀것
			return new ResponseEntity<Response>(new 
					Response(StatusCode.OK, ResponseMessage.RECORD_REDIS_LIST_SUCCESS, records), HttpStatus.OK);
			
		}else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED),
					HttpStatus.FORBIDDEN);
		}
	}
	
	
	// stop 눌렀을 때 redis에 있던 record를 꺼내서 db에 저장한다.
	@PostMapping
	public ResponseEntity saveStopRecord(@RequestBody Map<String, Object> runningInfo, HttpServletRequest request){
		System.out.println("gps/contoller/record");
		String token = request.getHeader("AUTH");
		if(jwtTokenProvider.validateToken(token)) {
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
			
			// 5. 총 running 업데이트
			recordService.updateRunningUser(loginUser, savedRunning);
			
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("running", savedRunning);
			map.put("records", records);
			map.put("area", gugunList);
			
			System.out.println(loginUser.getUserId()+" 저장 "+runningId);
			rankService.getRaceExp(loginUser.getUserId(), runningId);
			challengeService.updateAccDistance(loginUser, savedRunning.getAccDistance());	// update위해서
			
			return new ResponseEntity<Response>(new 
					Response(StatusCode.OK, ResponseMessage.RUNNING_INSERT_SUCCESS, map), HttpStatus.OK);
			
		}else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED),
					HttpStatus.FORBIDDEN);
		}
	}
	
	// 해당 running에 대한 기록을 보고싶을 때 running기록과 records를 쭉 보내준다.
	@GetMapping("/records/{runningId}")
	public ResponseEntity findRecordsByRunningId(@PathVariable int runningId) {
		System.out.println("gps/controller/get");
		Running running = recordService.findRunningById(runningId);
		List<Record> records = recordService.findAllRecordByRunningId(running);
		List<RunningArea> runningAreas = running.getRunningArea();
		List<Gugun> areas = new ArrayList<>();
		for(RunningArea ra: runningAreas) {
			areas.add(ra.getGugun());
		}
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("running", running);
		map.put("records", records);
		map.put("areas", areas);
		
		return new ResponseEntity<Response>(new
				Response(StatusCode.OK, ResponseMessage.RUNNING_SEARCH_SUCCESS, map), HttpStatus.OK);
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
	
	// 친구의 피드를 최신 런닝을 하나만 보내준다.
	@GetMapping("/friends")
	public ResponseEntity findOneByFriendsId(HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		int userId = 0;
		if(jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
			List<User> friends = friendService.list(userId);
//		List<RunningUser> runningUsers = recordService.findAllRunningUserByUserId(friends);
			List<Running> runnings = recordService.findRunningByFriendsId(friends);
			
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("friends", friends);
			map.put("runnings", runnings);
			
			return new ResponseEntity<Response>(
					new Response(StatusCode.OK, ResponseMessage.RUNNING_FRIENDS_RECORD, map), HttpStatus.OK);

		}else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED),
					HttpStatus.FORBIDDEN);
		}
	}
	
	// running을 삭제한다.
	@DeleteMapping("/{runningId}")
	public ResponseEntity deleteRunningByUserId(@PathVariable int runningId, HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		int userId = 0;
		if(jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
			Long ret = recordService.deleteRunningByUserId(userId, runningId);
			
			return new ResponseEntity<Response>(
					new Response(StatusCode.OK, ResponseMessage.RUNNING_DELETE_RECORD, ret), HttpStatus.FORBIDDEN);
		
		}else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED),
					HttpStatus.FORBIDDEN);
		}
	}
	
	@ApiOperation(value = "유저가 활동 지역으로 설정한 곳에서의 런닝 기록 조회", response = ResponseEntity.class)
	@GetMapping("/areas")
	public ResponseEntity findAllRunningByArea(HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		int userId = 0;
		if(jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
			List<Running> runnings = recordService.findAllRunningByActivityArea(userId);
			
			return new ResponseEntity<Response>(new 
					Response(StatusCode.OK, ResponseMessage.AREA_RUNNINGS_SUCCESS, runnings), HttpStatus.OK);
		}else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED),
					HttpStatus.FORBIDDEN);
		}
		
	}
	
	@ApiOperation(value = "유저의 총 뛴 거리, 횟수 등의 요약 정보", response = ResponseEntity.class)
	@GetMapping("/summary")
	public ResponseEntity findAllRunningUser(HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		int userId = 0;
		if(jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
			RunningUser runningUser = recordService.findRunningUserByUserId(userId);
			
			return new ResponseEntity<Response>(new 
					Response(StatusCode.OK, ResponseMessage.USER_SUMMARY_RUNNING_SUCCESS, runningUser), HttpStatus.OK);
		}else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED),
					HttpStatus.FORBIDDEN);
		}
	}
	
	@ApiOperation(value = "유저의 총 뛴 거리, 횟수 등의 요약 정보", response = ResponseEntity.class)
	@GetMapping("/summary/region")
	public ResponseEntity findAllRunningUserByUserId(HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		if(jwtTokenProvider.validateToken(token)) {
			int userId = jwtTokenProvider.getUserIdFromJwt(token);
			List<RunningUser> runningUsers = recordService.findRunningUserByUserIdAndUserId(userId);
			return new ResponseEntity<Response>(new 
					Response(StatusCode.OK, ResponseMessage.REGION_SUMMARY_RUNNING_SUCCESS, runningUsers), HttpStatus.OK);
		}else {
			return new ResponseEntity<Response>(new 
					Response(StatusCode.FORBIDDEN, ResponseMessage.FORBIDDEN), HttpStatus.FORBIDDEN);
		}
		
	}
	
}
