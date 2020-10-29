package kr.co.rwm.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import kr.co.rwm.entity.Challenge;
import kr.co.rwm.entity.ChallengeUser;
import kr.co.rwm.entity.User;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.ChallengeService;
import kr.co.rwm.service.JwtTokenProvider;
import kr.co.rwm.service.UserService;
import lombok.RequiredArgsConstructor;

/**
 * ChallengeController
 * <pre>
 * <b> History:</b>
 * 			김순빈, ver.0.1. 2020-10-26
 * </pre>
 * 
 * @author 김순빈
 * @version 0.1, 2020-10-26, 챌린지 관리 Controller
 * @see None
 *
 */
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/challenges")
public class ChallengeController {
	
	private final ChallengeService challengeService;
	private final UserService userService;
	private final JwtTokenProvider jwtTokenProvider;
	
	/**
	 * 관리자 - 챌린지 생성
	 * 
	 * @param challenge
	 * @return
	 * @apiNote 
	 */
	@ApiOperation(value = "챌린지 생성", response = ResponseEntity.class)
	@PostMapping
	public ResponseEntity saveChallenge(@RequestBody Challenge challenge) {
		System.out.println("/challenges/save - 관리자가 challenge를 등록합니다.");
		User loginUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if(loginUser.getRoles().stream().anyMatch(x -> x.equals("admin"))) {
			challengeService.saveChallenge(challenge);
		}else {
			return new ResponseEntity<Response>(new 
					Response(StatusCode.FORBIDDEN, ResponseMessage.CHALLENGE_ACCESS_FORBIDDEN, null), HttpStatus.FORBIDDEN);
		}
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.CHALLENGE_INSERT_SUCCESS, null), HttpStatus.OK);
	}
	
	/**
	 * 관리자, 유저 - 챌린지 전체 목록 조회
	 * 
	 * @return
	 */
	@ApiOperation(value = "챌린지 전체 목록 조회", response = ResponseEntity.class)
	@GetMapping
	public ResponseEntity findAllChallenge() {
		System.out.println("/challenges/save - challenge를 전체조회합니다.");
		List<Challenge> challenges = challengeService.findAllChallenge();
		LocalDateTime today = LocalDateTime.now();
		List<Challenge> beforeChallenges = challengeService.findAllChallengeGraterThanEndTime(today);	//진행 첼린지
		List<Challenge> afterChallenges = challengeService.findAllChallengeLessThanEndTime(today);	//끝난 챌린지
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("all", challenges);
		map.put("before", beforeChallenges);
		map.put("after", afterChallenges);
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.CHALLENGE_LIST_SUCCESS, map), HttpStatus.OK);
	}

	/**
	 * 관리자, 유저 - 챌린지 상세 조회
	 * 
	 * @param challengeId
	 * @return
	 */
	@ApiOperation(value = "챌린지 상세 조회", response = ResponseEntity.class)
	@GetMapping("/{challengeId}")
	public ResponseEntity findChallengeByChallengeId(@PathVariable int challengeId) {
		System.out.println("/challenges/detail - 상세 조회 합니다.");
		Challenge challenge = challengeService.findChallengeByChallengeId(challengeId);
		// 이 때, 딸린 유저들 싹다 데리고와야함 ㅎㅎ
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.CHALLENGE_SEARCH_SUCCESS, challenge), HttpStatus.OK);
	}
	
	/**
	 * 관리자 - 챌린지 수정
	 * 
	 * @param challengeId
	 * @param challenge
	 * @return
	 */
	@ApiOperation(value = "챌린지 수정", response = ResponseEntity.class)
	@PutMapping("/{challengeId}")
	public ResponseEntity updateChallenge(@PathVariable int challengeId, @RequestBody Challenge challenge) {
		System.out.println("/challenges/save - 관리자가 challenge를 업데이트합니다.");
		Challenge updateChallenge = challengeService.updateChallenge(challengeId, challenge);
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.CHALLENGE_UPDATE_SUCCESS, null), HttpStatus.OK);
	}
	
	/**
	 * 관리자 - 챌린지 삭제
	 * 
	 * @param challengeId
	 * @return
	 */
	@ApiOperation(value = "챌린지 삭제", response = ResponseEntity.class)
	@DeleteMapping("/{challengeId}")
	public ResponseEntity deleteChallenge(@PathVariable int challengeId) {
		System.out.println("/challenges/delete - 관리자가 challenge를 삭제합니다.");
		challengeService.deleteChallenge(challengeId);
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.CHALLENGE_DELETE_SUCCESS, null), HttpStatus.OK);
	}
	
	/**
	 * 챌린지 참여
	 * 
	 * @param challengeId
	 * @param request
	 * @return
	 */
	@ApiOperation(value = "챌린지 참여", response = ResponseEntity.class)
	@PostMapping("/runners/{challengeId}")
	public ResponseEntity participateChallenge(@PathVariable int challengeId, HttpServletRequest request) {
		System.out.println("/challenges/participate - 유저가 챌린지에 참여합니다.");
		String token = request.getHeader("AUTH");
		int userId = 0;
		if(jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
		}
		ChallengeUser challengeUser = challengeService.participateChallenge(challengeId, userId);
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.CHALLENGE_PARTICIPATE_SUCCESS, challengeUser), HttpStatus.OK);
	}
	
	// 매일 자정마다 실행
//	@Scheduled(cron = "1 0 00 * * ?")
	@ApiOperation(value = "챌린지 끝내기")
	@GetMapping("/end")
	public ResponseEntity endChallenge(HttpServletRequest request) {
		System.out.println("챌린지 업데이트 - 챌린지 여부");
		/**
		 * 1초로 바뀌자마자 -> 그 전날이랑 endTime이 같은 challenge들 뽑고 -> 그 이후에 검사하고 List<User>
		 */
		
		List<User> successUsers = challengeService.findAllChallengeEqualDate();
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.CHALLENGE_PARTICIPATE_SUCCESS, null), HttpStatus.OK);
	}
}
	