package kr.co.rwm.service;

import java.time.LocalDateTime;
import java.util.List;

import kr.co.rwm.dto.ChallengeDto;
import kr.co.rwm.entity.Challenge;
import kr.co.rwm.entity.ChallengeUser;
import kr.co.rwm.entity.User;

public interface ChallengeService {

	/**
	 * challenge를 저장
	 * @param challengeDto
	 * @return Challenge
	 */
	public Challenge saveChallenge(ChallengeDto challengeDto);
	
	public List<Challenge> findAllChallenge();
	
	public Challenge findChallengeByChallengeId(int challengeId);
	
	/**
	 * challenge의 이름, 시작날짜, 종료날짜만 update
	 * @param challengeId
	 * @param challenge
	 * @return
	 */
	public Challenge updateChallenge(int challengeId, ChallengeDto challenge);
	/**
	 * challenge의 이름, 시작날짜, 종료날짜만 update - 이미지
	 * @param challengeId
	 * @param challenge
	 * @return
	 */
	public Challenge updateChallengeImage(int challengeId, Challenge challenge);
	
	/**
	 * challengeId로 챌린지 삭제
	 * @param challengeId
	 * @return boolean (true: 참여자 없음, false: 참여자있음)
	 */
	public int deleteChallenge(int challengeId);
	
	/**
	 * challengeId를 이용해서 user가 뛴만큼 user 및 challenge의 distance update
	 * challenge가 여러개라면 int가 아닐수동!
	 * @param challengeId
	 * @param distance
	 * @return
	 */
	public Challenge updateChallengeDistance(int challengeId, int userId, double distance);
	
	/**
	 * challengeId를 이용해서 user가 결제한 금액만큼 update
	 * @param challengeId
	 * @param donate
	 * @return
	 */
	public Challenge updateChallengeDonate(int challengeId, long donate);
	
	/**
	 * endTime보다(어떤 날짜가 들어오는지에 따라 다름) 종료 날짜가 나중인 챌린지 - 진행중
	 * @param endTime
	 * @return
	 */
	public List<Challenge> findAllChallengeGraterThanEndTime(LocalDateTime endTime);
	
	/**
	 * startTime보다 시작 시간이 나중인 챌린지 - 예정
	 * @param startTime
	 * @return
	 */
	public List<Challenge> findAllChallengeGraterThanStartTime(LocalDateTime startTime);
	
	/**
	 * endTime보다(어떤 날짜가 들어오는지에 따라 다름) 종료 날짜가 이전인 챌린지 - 종료
	 * @param endTime
	 * @return
	 */
	public List<Challenge> findAllChallengeLessThanEndTime(LocalDateTime endTime);

	/**
	 * 챌린지 참여
	 * @param challengeId
	 * @param donation
	 * @param userId
	 */
	public ChallengeUser participateChallenge(int challengeId, int donation, int userId);
	
	/**
	 * 챌린지 참여 취소
	 * @param challengeId
	 * @param donation
	 * @param userId
	 */
	public Challenge cancelChallenge(int challengeId, int donation, int userId);
	
	/**
	 * 유저가 참여하고 있는 챌린지 아이디 가져오기
	 * @param userId
	 * @return
	 */
	public List<Integer> findByChallengeUserList(int userId);

	/**
	 * 유저가 참여하고 있는 모든 챌린지 누적 거리 업데이트 시키기
	 * @param loginUser
	 * @param accDistance
	 */
	public void updateAccDistance(User user, double accDistance);

	/**
	 * 오늘 이전 날짜 확인
	 * @param today
	 * @return
	 */
	public List<User> findAllChallengeEqualDate();

	/**
	 * 챌린지와 유저 pk로 유저가 해당 챌린지를 참여하는지 확인
	 * @param userId
	 * @param challenge
	 * @return
	 */
	public ChallengeUser findChallengeUserByUserIdAndChallengeId(int userId, Challenge challenge);

	/**
	 * 유저의 참가 챌린지 목록
	 * @param userId
	 * @return
	 */
	public List<ChallengeUser> findAllChallengeUserByUserIdIng(int userId);
	public List<ChallengeUser> findAllNonChallengeUserByUserIdIng(int userId);
	
	/**
	 * 유저의 참가 예정 챌린지 목록
	 * @param userId
	 * @return
	 */
	public List<ChallengeUser> findAllChallengeUserByUserIdComingSoon(int userId);
	public List<ChallengeUser> findAllNonChallengeUserByUserIdComingSoon(int userId);
	
	/**
	 * 유저의 종료 챌린지 목록
	 * @param userId
	 * @return
	 */
	public List<ChallengeUser> findAllChallengeUserByUserIdEnd(int userId);
	public List<ChallengeUser> findAllNonChallengeUserByUserIdEnd(int userId);
	
	/**
	 * 유저가 탈퇴 시 
	 * 현재 거리(진행중 챌린지)
	 * 참가자 수(진행중, 진행예정 챌린지)
	 * 줄이기
	 * @param userEmail
	 */
	public void deleteAllChallengeUserByUserEmail(String userEmail);

}
