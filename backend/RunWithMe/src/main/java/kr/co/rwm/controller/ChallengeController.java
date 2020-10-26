package kr.co.rwm.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

import org.joda.time.LocalDate;
import org.joda.time.LocalTime;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.ChallengeService;
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
		challengeService.saveChallenge(challenge);
		
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
		System.out.println("/challenges/save - 관리자가 challenge를 전체조회합니다.");
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
		System.out.println("/challenges/save - 관리자가 challenge를 등록합니다.");
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
	
	// challenges 
}
	