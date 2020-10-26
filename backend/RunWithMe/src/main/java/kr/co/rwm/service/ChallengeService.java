package kr.co.rwm.service;

import java.time.LocalDateTime;
import java.util.List;

import kr.co.rwm.entity.Challenge;

public interface ChallengeService {

	public void saveChallenge(Challenge challenge);
	
	public List<Challenge> findAllChallenge();
	
	public Challenge findChallengeByChallengeId(int challengeId);
	
	/**
	 * challenge의 이름, 시작날짜, 종료날짜만 update
	 * @param challengeId
	 * @param challenge
	 * @return
	 */
	public Challenge updateChallenge(int challengeId, Challenge challenge);
	
	/**
	 * challengeId로 챌린지 삭제
	 * @param challengeId
	 */
	public void deleteChallenge(int challengeId);
	
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
	 * endTime보다(어떤 날짜가 들어오는지에 따라 다름) 종료 날짜가 나중인 챌린지
	 * @param endTime
	 * @return
	 */
	public List<Challenge> findAllChallengeGraterThanEndTime(LocalDateTime endTime);
	
	/**
	 * endTime보다(어떤 날짜가 들어오는지에 따라 다름) 종료 날짜가 이전인 챌린지
	 * @param endTime
	 * @return
	 */
	public List<Challenge> findAllChallengeLessThanEndTime(LocalDateTime endTime);
}
