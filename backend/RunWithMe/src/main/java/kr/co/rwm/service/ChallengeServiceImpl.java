package kr.co.rwm.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Challenge;
import kr.co.rwm.entity.ChallengeUser;
import kr.co.rwm.entity.User;
import kr.co.rwm.repo.ChallengeRepository;
import kr.co.rwm.repo.ChallengeUserRepository;
import kr.co.rwm.repo.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ChallengeServiceImpl implements ChallengeService {

	private final ChallengeRepository challengeRepository;
	private final UserRepository userRepository;
	private final ChallengeUserRepository challengeUserRepository;

	@Override
	public Challenge saveChallenge(Challenge challenge) {
		return challengeRepository.save(challenge);
	}

	@Override
	public List<Challenge> findAllChallenge() {
		return challengeRepository.findAll();
	}

	@Override
	public Challenge findChallengeByChallengeId(int challengeId) {
		return challengeRepository.findByChallengeId(challengeId)
				.orElseThrow(() -> new IllegalArgumentException("해당 챌린지가 없습니다."));
	}

	@Override
	public Challenge updateChallenge(int challengeId, Challenge challenge) {
		Challenge updateChallenge = challengeRepository.findByChallengeId(challengeId)
				.orElseThrow(() -> new IllegalArgumentException("해당 챌린지가 없습니다."));
		updateChallenge.setTitle(challenge.getTitle());
		updateChallenge.setContent(challenge.getContent());
		updateChallenge.setDistanceGoal(challenge.getDistanceGoal());
		updateChallenge.setDonateGoal(challenge.getDonateGoal());
		updateChallenge.setStartTime(challenge.getStartTime());
		updateChallenge.setEndTime(challenge.getEndTime());
		challengeRepository.save(updateChallenge);

		return updateChallenge;
	}

	@Transactional
	@Override
	public void deleteChallenge(int challengeId) {
		Challenge challenge = challengeRepository.findByChallengeId(challengeId)
				.orElseThrow(() -> new IllegalArgumentException("해당 챌린지가 없습니다."));
		challengeRepository.delete(challenge);
	}

	@Override
	public Challenge updateChallengeDistance(int challengeId, int userId, double distance) {
		Challenge challenge = challengeRepository.findByChallengeId(challengeId)
				.orElseThrow(() -> new IllegalArgumentException("해당 챌린지가 없습니다."));
		challenge.setDistanceCurrent(challenge.getDistanceCurrent() + distance);
		challengeRepository.save(challenge);

		return null;
	}

	@Override
	public Challenge updateChallengeDonate(int challengeId, long donate) {
		Challenge challenge = challengeRepository.findByChallengeId(challengeId)
				.orElseThrow(() -> new IllegalArgumentException("해당 챌린지가 없습니다."));
		challenge.setDonateCurrent(challenge.getDonateCurrent() + donate);
		challengeRepository.save(challenge);

		return null;
	}

	@Override
	public List<Challenge> findAllChallengeGraterThanEndTime(LocalDateTime endTime) {
		// 진행중
		List<Challenge> ingChallenges = new ArrayList<Challenge>();
		List<Challenge> challenges = challengeRepository.findAllByEndTimeGreaterThanEqual(endTime);
		for(Challenge challenge: challenges) {
			if(challenge.getStartTime().isAfter(endTime)) continue;
			ingChallenges.add(challenge);
		}
		return ingChallenges;
	}

	@Override
	public List<Challenge> findAllChallengeGraterThanStartTime(LocalDateTime startTime) {
		// 끝남
		List<Challenge> challenges = challengeRepository.findAllByStartTimeGreaterThan(startTime);
		return challenges;
	}
	
	@Override
	public List<Challenge> findAllChallengeLessThanEndTime(LocalDateTime endTime) {
		// 끝남
		List<Challenge> challenges = challengeRepository.findAllByEndTimeLessThanEqual(endTime);
		return challenges;
	}

	@Override
	public ChallengeUser participateChallenge(int challengeId, int donation, int userId) {
		User user = userRepository.findByUserId(userId).get();
		
		Challenge challenge = challengeRepository.findByChallengeId(challengeId).get();
		challenge.setParticipant(challenge.getParticipant()+1);
		challenge.setDonateCurrent(challenge.getDonateCurrent()+donation);
		challengeRepository.save(challenge);
		
		ChallengeUser challengeUser = ChallengeUser.builder()
												.userId(user)
												.donation(donation)
												.challengeId(challenge)
												.accDistance(0)
												.build();
		return challengeUserRepository.save(challengeUser);
	}

	@Transactional
	@Override
	public Challenge cancelChallenge(int challengeId, int donation, int userId) {
		User user = userRepository.findByUserId(userId).get();
		
		Challenge challenge = challengeRepository.findByChallengeId(challengeId).get();
		challenge.setParticipant(challenge.getParticipant()-1);
		challenge.setDonateCurrent(challenge.getDonateCurrent()-donation);
		challengeRepository.save(challenge);
		
		ChallengeUser challengeUser = challengeUserRepository.findByUserIdAndChallengeId(user, challenge);
		challengeUserRepository.delete(challengeUser);
		return challenge;
	}

	@Override
	public List<Integer> findByChallengeUserList(int userId) {
		User user = userRepository.findByUserId(userId).get();
		List<ChallengeUser> challengeUser = challengeUserRepository.findAllByUserId(user);
		List<Integer> challengeIds = new ArrayList<Integer>();
		for (ChallengeUser cu : challengeUser) {
			challengeIds.add(cu.getChallengeId().getChallengeId());
		}
		return challengeIds;
	}

	@Override
	public void updateAccDistance(User user, double accDistance) {
		List<ChallengeUser> challengeUsers = challengeUserRepository.findAllByUserId(user);
		double newDistance;
		LocalDateTime today = LocalDateTime.now();
		for (ChallengeUser cu : challengeUsers) {
			if ((cu.getChallengeId().getEndTime()).isBefore(today) 
					|| cu.getChallengeId().getStartTime().isAfter(today))
				continue;
			
			// challenge update
			Challenge challenge = challengeRepository.findByChallengeId(cu.getChallengeId().getChallengeId()).get();
			challenge.setDistanceCurrent(challenge.getDistanceCurrent()+accDistance);
			challengeRepository.save(challenge);
			
			// challenge_user update
			newDistance = cu.getAccDistance() + accDistance;
			cu.setAccDistance(newDistance);
			challengeUserRepository.save(cu); // update challenge user
		}
	}

	@Override
	public List<User> findAllChallengeEqualDate() {
		List<User> successUsers = new ArrayList<User>();

		LocalDateTime yesterday = LocalDateTime.now().minusDays(1);
		yesterday = yesterday.withHour(23).withMinute(59).withSecond(59).withNano(0);
		System.out.println(yesterday);

		List<Challenge> challenges = challengeRepository.findAllByEndTime(yesterday);
		System.out.println(challenges.size());
		
		double personalGoal;
		for (Challenge c : challenges) {
			personalGoal = c.getPersonalDistanceGoal();
			List<ChallengeUser> challengeUsers = challengeUserRepository.findAllByChallengeId(c);

			for (ChallengeUser cu : challengeUsers) {
				if (cu.getAccDistance() < personalGoal)
					continue;
				cu.setSuccess(true);
				challengeUserRepository.save(cu);
				successUsers.add(cu.getUserId());
			}

		}
		return successUsers;
	}

	@Override
	public ChallengeUser findChallengeUserByUserIdAndChallengeId(int userId, Challenge challenge) {
		User user = userRepository.findByUserId(userId).get();
		ChallengeUser challengeUser = challengeUserRepository.findByUserIdAndChallengeId(user, challenge);
		return challengeUser;
	}

	@Override
	public List<ChallengeUser> findAllChallengeUserByUserIdIng(int userId) {
		User user = userRepository.findByUserId(userId).get();
		List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserId(user);
		List<ChallengeUser> challengeUsers = new ArrayList<ChallengeUser>(); 
		
		LocalDateTime today = LocalDateTime.now();
		today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
		for(ChallengeUser cu: challengeUserList) {
			// 끝나는 시간이 오늘보다 나중이고, 시작시간이 오늘보다 이전인 경우
			if ((cu.getChallengeId().getEndTime()).isAfter(today) 
					&& cu.getChallengeId().getStartTime().isBefore(today)) {
				challengeUsers.add(cu);
			}
		}
		return challengeUsers;
	}

	@Override
	public List<ChallengeUser> findAllChallengeUserByUserIdComingSoon(int userId) {
		User user = userRepository.findByUserId(userId).get();
		List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserId(user);
		List<ChallengeUser> challengeUsers = new ArrayList<ChallengeUser>(); 
		
		LocalDateTime today = LocalDateTime.now();
		today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
		for(ChallengeUser cu: challengeUserList) {
			// 시작시간이 오늘보다 나중일 때
			if (cu.getChallengeId().getStartTime().isAfter(today)) {
				challengeUsers.add(cu);
			}
		}
		return challengeUsers;
	}

	@Override
	public List<ChallengeUser> findAllChallengeUserByUserIdEnd(int userId) {
		User user = userRepository.findByUserId(userId).get();
		List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserId(user);
		List<ChallengeUser> challengeUsers = new ArrayList<ChallengeUser>(); 
		
		LocalDateTime today = LocalDateTime.now();
		today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
		for(ChallengeUser cu: challengeUserList) {
			// 끝나는 시간이 오늘보다 이전일때
			if ((cu.getChallengeId().getEndTime()).isBefore(today)) {
				challengeUsers.add(cu);
			}
		}
		return challengeUsers;
	}

	@Override
	public void deleteAllChallengeUserByUserEmail(String userEmail) {
		User user = userRepository.findByUserEmail(userEmail).get();
		List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserId(user);
		
		LocalDateTime today = LocalDateTime.now();
		today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
		for(ChallengeUser cu: challengeUserList) {
			Challenge challenge = challengeRepository.findByChallengeId(cu.getChallengeId().getChallengeId()).get();
			if (challenge.getEndTime().isBefore(today)) continue;
			
			challenge.setParticipant(challenge.getParticipant()-1);
			challenge.setDistanceCurrent(challenge.getDistanceCurrent()-cu.getAccDistance());
			challengeRepository.save(challenge);
		}
		
	}

}
