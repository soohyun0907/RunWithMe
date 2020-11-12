package kr.co.rwm.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import io.swagger.annotations.ApiOperation;
import kr.co.rwm.entity.Challenge;
import kr.co.rwm.entity.ChallengeUser;
import kr.co.rwm.entity.User;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.ChallengeService;
import kr.co.rwm.service.JwtTokenProvider;
import kr.co.rwm.service.RanksService;
import kr.co.rwm.service.S3Service;
import kr.co.rwm.service.UserService;
import lombok.RequiredArgsConstructor;

/**
 * ChallengeController
 * 
 * <pre>
 * <b> History:</b>
 * 			김순빈, ver.0.1. 2020-10-26
 * </pre>
 * 
 * @author 김형택
 * @version 0.2, 2020-11-10, 챌린지 전체조회, 참여 여부 수정
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
	private final RanksService ranksService;
	private final S3Service s3Service;

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
		Challenge newChallenge = new Challenge();
		if (loginUser.getRoles().stream().anyMatch(x -> x.equals("admin"))) {
			newChallenge = challengeService.saveChallenge(challenge);
		} else {
			return new ResponseEntity<Response>(
					new Response(StatusCode.FORBIDDEN, ResponseMessage.CHALLENGE_ACCESS_FORBIDDEN, null),
					HttpStatus.FORBIDDEN);
		}

		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.CHALLENGE_INSERT_SUCCESS, newChallenge),
				HttpStatus.OK);
	}
	
	@ApiOperation(value = "챌린지 이미지 저장", response = ResponseEntity.class)
	@PostMapping("/images/{challengeId}")
	public ResponseEntity saveChallengeImage(@PathVariable int challengeId, @RequestParam("files") MultipartFile files, HttpServletRequest request) {
		System.out.println("/challenges/save - 관리자가 challenge를 등록합니다.");
		User loginUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		if (loginUser.getRoles().stream().anyMatch(x -> x.equals("admin"))) {
			String url = s3Service.challengeImgUpload(files, "challenges");
			System.out.println("images"+url);
			Challenge challenge = challengeService.findChallengeByChallengeId(challengeId);
			challenge.setChallengeImg(url);
			challengeService.updateChallenge(challengeId, challenge);

			return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.CHALLENGE_IMG_INSERT_SUCCESS, challenge),
					HttpStatus.OK);
		} else {
			return new ResponseEntity<Response>(
					new Response(StatusCode.FORBIDDEN, ResponseMessage.CHALLENGE_ACCESS_FORBIDDEN, null),
					HttpStatus.FORBIDDEN);
		}
	}

	/**
	 * 관리자 - 챌린지 전체 목록 조회
	 * 
	 * @return
	 */
	@ApiOperation(value = "챌린지 전체 목록 조회", response = ResponseEntity.class)
	@GetMapping
	public ResponseEntity findAllChallenge() {
		System.out.println("/challenges/save - challenge를 전체조회합니다.");
//		List<Challenge> challenges = challengeService.findAllChallenge();
		LocalDateTime today = LocalDateTime.now();
		List<Challenge> challenges = challengeService.findAllChallengeGraterThanEndTime(today); // 진행 첼린지
		List<Challenge> coingSoonChallenges = challengeService.findAllChallengeGraterThanStartTime(today); // 예정 첼린지
		challenges.addAll(coingSoonChallenges);
		
		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.CHALLENGE_LIST_SUCCESS, challenges),
				HttpStatus.OK);
	}
	
	/**
	 * 챌린지 전체 목록 및 참여 조회
	 * 
	 * @return
	 */
	@ApiOperation(value = "챌린지 전체 목록 및 참여 조회", response = ResponseEntity.class)
	@GetMapping("/participation")
	public ResponseEntity findAllMyChallenge(HttpServletRequest request) {
		System.out.println("/challenges/participation - challenge를 전체조회 및 참여를 확인합니다.");
		String token = request.getHeader("AUTH");
		if (jwtTokenProvider.validateToken(token)) {
			int userId = userId = jwtTokenProvider.getUserIdFromJwt(token);
			Map<String,List<ChallengeUser>> map = new HashMap<String, List<ChallengeUser>>();
			map.put("ing", challengeService.findAllNonChallengeUserByUserIdIng(userId));
			map.put("before", challengeService.findAllNonChallengeUserByUserIdComingSoon(userId));
			map.put("after", challengeService.findAllNonChallengeUserByUserIdEnd(userId));
			map.put("ingP", challengeService.findAllChallengeUserByUserIdIng(userId));
			map.put("beforeP", challengeService.findAllChallengeUserByUserIdComingSoon(userId));
			map.put("afterP", challengeService.findAllChallengeUserByUserIdEnd(userId));

			return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.CHALLENGE_LIST_SUCCESS, map),
					HttpStatus.OK);
		}else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.CHALLENGE_LIST_FAIL),HttpStatus.FORBIDDEN);
		}
//		List<Challenge> challenges = challengeService.findAllChallenge();
//		LocalDateTime today = LocalDateTime.now();
		
//		challengeService.findAllChallengeUserByUserIdIng(userId);
//		challengeService.findAllChallengeUserByUserIdComingSoon(userId);
//		challengeService.findAllChallengeUserByUserIdEnd(userId);
//		challengeService.findAllNonChallengeUserByUserIdIng(userId);
//		challengeService.findAllNonChallengeUserByUserIdComingSoon(userId);
//		challengeService.findAllNonChallengeUserByUserIdEnd(userId);
	}
	
	/**
	 * 관리자, 유저 - 진행중 챌린지 목록 조회
	 * 
	 * @return
	 */
	@ApiOperation(value = "진행중 챌린지 목록 조회", response = ResponseEntity.class)
	@GetMapping("/ing")
	public ResponseEntity findIngChallenge() {
		System.out.println("/challenges/ing - 진행중인 챌린지 조회");
		LocalDateTime today = LocalDateTime.now();
		List<Challenge> ingChallenges = challengeService.findAllChallengeGraterThanEndTime(today); // 진행 첼린지
		
		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.CHALLENGE_ING_SUCCESS, ingChallenges),
				HttpStatus.OK);
	}
	
	/**
	 * 관리자, 유저 - 예정 챌린지 목록 조회
	 * 
	 * @return
	 */
	@ApiOperation(value = "예정 챌린지 목록 조회", response = ResponseEntity.class)
	@GetMapping("/comingsoon")
	public ResponseEntity findComingSoonChallenge() {
		System.out.println("/challenges/comingsoon - 예정 챌린지 조회");
		LocalDateTime today = LocalDateTime.now();
		List<Challenge> coingSoonChallenges = challengeService.findAllChallengeGraterThanStartTime(today); // 예정 첼린지

		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.CHALLENGE_COMINGSOON_SUCCESS, coingSoonChallenges),
				HttpStatus.OK);
	}
	
	/**
	 * 관리자, 유저 - 종료 챌린지 목록 조회
	 * 
	 * @return
	 */
	@ApiOperation(value = "종료 챌린지 목록 조회", response = ResponseEntity.class)
	@GetMapping("/end")
	public ResponseEntity findEndChallenge() {
		System.out.println("/challenges/end - 종료 챌린지 조회");
		List<Challenge> challenges = challengeService.findAllChallenge();
		LocalDateTime today = LocalDateTime.now();
		List<Challenge> endChallenges = challengeService.findAllChallengeLessThanEndTime(today); // 끝난 챌린지

		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.CHALLENGE_END_SUCCESS, endChallenges),
				HttpStatus.OK);
	}

	/**
	 * 관리자, 유저 - 챌린지 상세 조회
	 * 
	 * @param challengeId
	 * @return
	 */
	@ApiOperation(value = "챌린지 상세 조회", response = ResponseEntity.class)
	@GetMapping("/{challengeId}")
	public ResponseEntity findChallengeByChallengeId(@PathVariable int challengeId, HttpServletRequest request) {
		System.out.println("/challenges/detail - 상세 조회 합니다.");
		String token = request.getHeader("AUTH");
		int userId = 0;
		if (jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
		}

		Challenge challenge = challengeService.findChallengeByChallengeId(challengeId);
		System.out.println(challenge.getChallengeId());
		// 이 때, 딸린 유저들 싹다 데리고와야함 ㅎㅎ
		ChallengeUser challengeUser = challengeService.findChallengeUserByUserIdAndChallengeId(userId, challenge);
		if (challengeUser != null) {
			// 참여하고 있으면 challenge에 user정보까지 담아서 보내줌
			return new ResponseEntity<Response>(
					new Response(StatusCode.OK, ResponseMessage.CHALLENGE_SEARCH_SUCCESS_T, challengeUser),
					HttpStatus.OK);
		} else {
			// 참여안하고 있으면 user는 빈껍데기로 감
			challengeUser = ChallengeUser.builder().challengeId(challenge).build();
			return new ResponseEntity<Response>(
					new Response(StatusCode.OK, ResponseMessage.CHALLENGE_SEARCH_SUCCESS_F, challengeUser),
					HttpStatus.OK);
		}
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

		return new ResponseEntity<Response>(
				new Response(StatusCode.OK, ResponseMessage.CHALLENGE_UPDATE_SUCCESS, updateChallenge), HttpStatus.OK);
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
		int ret = challengeService.deleteChallenge(challengeId);
		if(ret == -1) {
			return new ResponseEntity<Response>(new Response(StatusCode.NOT_FOUND, ResponseMessage.CHALLENGE_NOT_FOUND, null),
					HttpStatus.NOT_FOUND);
		}else if(ret == 0) {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.CHALLENGE_DELETE_FAIL, null),
					HttpStatus.FORBIDDEN);
		}

		return new ResponseEntity<Response>(new Response(StatusCode.OK, ResponseMessage.CHALLENGE_DELETE_SUCCESS, null),
				HttpStatus.OK);
	}

	/**
	 * 챌린지 참여
	 * 
	 * @param map
	 * @param request
	 * @return
	 */
	@ApiOperation(value = "챌린지 참여", response = ResponseEntity.class)
	@PostMapping("/runners")
	public ResponseEntity participateChallenge(@RequestBody HashMap<String, Integer> map, HttpServletRequest request) {
		System.out.println("/challenges/participate - 유저가 챌린지에 참여합니다.");
		String token = request.getHeader("AUTH");
		int userId = 0;
		if (jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
		}
		int challengeId = map.get("challengeId");
		int donation = map.get("donation");
		ChallengeUser challengeUser = challengeService.participateChallenge(challengeId, donation, userId);

		return new ResponseEntity<Response>(
				new Response(StatusCode.OK, ResponseMessage.CHALLENGE_PARTICIPATE_SUCCESS, challengeUser),
				HttpStatus.OK);
	}
	
	/**
	 * 챌린지 참여 취소
	 * 
	 * @param map
	 * @param request
	 * @return
	 */
	@ApiOperation(value = "챌린지 참여 취소", response = ResponseEntity.class)
	@DeleteMapping("/runners/{challengeId}/{donation}")
	public ResponseEntity cancelChallenge(@PathVariable int challengeId, @PathVariable int donation, HttpServletRequest request) {
		System.out.println("/challenges/participate - 유저가 챌린지 참여를 취소합니다.");
		String token = request.getHeader("AUTH");
		int userId = 0;
		if (jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
		}
//		int challengeId = map.get("challengeId");
//		int donation = map.get("donation");
		Challenge challenge = challengeService.cancelChallenge(challengeId, donation, userId);

		return new ResponseEntity<Response>(
				new Response(StatusCode.OK, ResponseMessage.CHALLENGE_PARTICIPATE_CANCEL_SUCCESS, challenge),
				HttpStatus.OK);
	}

	/**
	 * 매일 자정마다 챌린지 끝내면서 유저의 정보 업데이트
	 * @param request
	 */
	@Scheduled(cron = "1 0 00 * * ?")
	@ApiOperation(value = "챌린지 끝내기")
	@GetMapping("/finish")
	public void finishChallenge(HttpServletRequest request) {
		System.out.println("챌린지 업데이트 - 챌린지 달성 여부");

		List<User> successUsers = challengeService.findAllChallengeEqualDate();
		ranksService.getDonateExp(successUsers);
	}
	
	/**
	 * 유저의 참여 챌린지 목록
	 * @param request
	 * @return
	 */
	@ApiOperation(value = "유저가 참여중인 챌린지 조회", response = ResponseEntity.class)
	@GetMapping("/user/ing")
	public ResponseEntity findChallengeUserByUserIdIng(HttpServletRequest request) {
		System.out.println("/challenges/user/ing - 유저가 참여중인 챌린지 조회");
		String token = request.getHeader("AUTH");
		int userId = 0;
		if (jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
		}
		List<ChallengeUser> challengeUsers = challengeService.findAllChallengeUserByUserIdIng(userId);

		return new ResponseEntity<Response>(
				new Response(StatusCode.OK, ResponseMessage.CHALLENGE_USER_SEARCH_ING, challengeUsers),
				HttpStatus.OK);
	}
	
	/**
	 * 유저의 참여 예정 챌린지 목록
	 * @param request
	 * @return
	 */
	@ApiOperation(value = "유저가 참여 예정 챌린지 조회", response = ResponseEntity.class)
	@GetMapping("/user/comingsoon")
	public ResponseEntity findChallengeUserByUserIdComingSoon(HttpServletRequest request) {
		System.out.println("/challenges/user/comingsoon - 유저가 참여 예정인 챌린지 조회");
		String token = request.getHeader("AUTH");
		int userId = 0;
		if (jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
		}
		List<ChallengeUser> challengeUsers = challengeService.findAllChallengeUserByUserIdComingSoon(userId);

		return new ResponseEntity<Response>(
				new Response(StatusCode.OK, ResponseMessage.CHALLENGE_USER_SEARCH_COMINGSOON, challengeUsers),
				HttpStatus.OK);
	}
	
	/**
	 * 유저의 참여 종료 챌린지 목록
	 * @param request
	 * @return
	 */
	@ApiOperation(value = "유저가 참여 종료한 챌린지 조회", response = ResponseEntity.class)
	@GetMapping("/user/end")
	public ResponseEntity findChallengeUserByUserIdEnd(HttpServletRequest request) {
		System.out.println("/challenges/user/end - 유저가 참여 종료한 챌린지 조회");
		String token = request.getHeader("AUTH");
		int userId = 0;
		if (jwtTokenProvider.validateToken(token)) {
			userId = jwtTokenProvider.getUserIdFromJwt(token);
		}
		List<ChallengeUser> challengeUsers = challengeService.findAllChallengeUserByUserIdEnd(userId);

		return new ResponseEntity<Response>(
				new Response(StatusCode.OK, ResponseMessage.CHALLENGE_USER_SEARCH_END, challengeUsers),
				HttpStatus.OK);
	}
}
