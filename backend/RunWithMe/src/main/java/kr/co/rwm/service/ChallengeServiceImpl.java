package kr.co.rwm.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import kr.co.rwm.dto.ChallengeDto;
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
	private final String NO_CHALLENGE = "해당 챌린지가 없습니다.";

	@Override
	public Challenge saveChallenge(ChallengeDto challengeDto) {
		Challenge challenge = Challenge.builder().title(challengeDto.getTitle()).content(challengeDto.getContent())
				.distanceGoal(challengeDto.getDistanceGoal()).distanceCurrent(challengeDto.getDistanceCurrent())
				.donateGoal(challengeDto.getDonateGoal()).donateCurrent(challengeDto.getDonateCurrent())
				.startTime(challengeDto.getStartTime()).endTime(challengeDto.getEndTime())
				.personalDistanceGoal(challengeDto.getPersonalDistanceGoal())
				.challengeImg(challengeDto.getChallengeImg()).participant(challengeDto.getParticipant()).build();
		return challengeRepository.save(challenge);
	}

	@Override
	public List<Challenge> findAllChallenge() {
		return challengeRepository.findAll();
	}

	@Override
	public Challenge findChallengeByChallengeId(int challengeId) {
		return challengeRepository.findByChallengeId(challengeId)
				.orElseThrow(() -> new IllegalArgumentException(NO_CHALLENGE));
	}

	@Override
	public Challenge updateChallenge(int challengeId, ChallengeDto challenge) {
		Challenge updateChallenge = challengeRepository.findByChallengeId(challengeId)
				.orElseThrow(() -> new IllegalArgumentException(NO_CHALLENGE));
		updateChallenge.setTitle(challenge.getTitle());
		updateChallenge.setContent(challenge.getContent());
		updateChallenge.setDistanceGoal(challenge.getDistanceGoal());
		updateChallenge.setDonateGoal(challenge.getDonateGoal());
		updateChallenge.setStartTime(challenge.getStartTime());
		updateChallenge.setEndTime(challenge.getEndTime());
		challengeRepository.save(updateChallenge);

		return updateChallenge;
	}
	@Override
	public Challenge updateChallengeImage(int challengeId, Challenge challenge) {
		Challenge updateChallenge = challengeRepository.findByChallengeId(challengeId)
				.orElseThrow(() -> new IllegalArgumentException(NO_CHALLENGE));
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
	public int deleteChallenge(int challengeId) {
		Optional<Challenge> challenge = challengeRepository.findByChallengeId(challengeId);
		if (!challenge.isPresent()) {
			return -1;
		}

		if (challenge.get().getParticipant() > 0) {
			return 0;
		} else {
			challengeRepository.deleteByChallengeId(challenge.get().getChallengeId());
			return 1;
		}
	}

	@Override
	public Challenge updateChallengeDistance(int challengeId, int userId, double distance) {
		Challenge challenge = challengeRepository.findByChallengeId(challengeId)
				.orElseThrow(() -> new IllegalArgumentException(NO_CHALLENGE));
		challenge.setDistanceCurrent(challenge.getDistanceCurrent() + distance);
		challengeRepository.save(challenge);

		return null;
	}

	@Override
	public Challenge updateChallengeDonate(int challengeId, long donate) {
		Challenge challenge = challengeRepository.findByChallengeId(challengeId)
				.orElseThrow(() -> new IllegalArgumentException(NO_CHALLENGE));
		challenge.setDonateCurrent(challenge.getDonateCurrent() + donate);
		challengeRepository.save(challenge);

		return null;
	}

	@Override
	public List<Challenge> findAllChallengeGraterThanEndTime(LocalDateTime endTime) {
		// 진행중
		List<Challenge> ingChallenges = new ArrayList<Challenge>();
		List<Challenge> challenges = challengeRepository.findAllByEndTimeGreaterThanEqual(endTime);
		for (Challenge challenge : challenges) {
			if (challenge.getStartTime().isAfter(endTime))
				continue;
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
		Optional<User> users = userRepository.findByUserId(userId);
		if (users.isPresent()) {
			User user = users.get();
			Optional<Challenge> challenges = challengeRepository.findByChallengeId(challengeId);
			if(user.getMileage() < donation) {
				return null;
			}
			
			if (challenges.isPresent()) {
				Challenge challenge = challenges.get();
				challenge.setParticipant(challenge.getParticipant() + 1);
				challenge.setDonateCurrent(challenge.getDonateCurrent() + donation);
				challengeRepository.save(challenge);

				ChallengeUser challengeUser = ChallengeUser.builder().userId(user).donation(donation)
						.challengeId(challenge).accDistance(0).build();
				return challengeUserRepository.save(challengeUser);
			} else {
				return null;
			}
		} else {
			return null;
		}

	}

	@Transactional
	@Override
	public Challenge cancelChallenge(int challengeId, int donation, int userId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if (users.isPresent()) {
			User user = users.get();
			Optional<Challenge> challenges = challengeRepository.findByChallengeId(challengeId);
			if (challenges.isPresent()) {
				Challenge challenge = challenges.get();
				challenge.setParticipant(challenge.getParticipant() - 1);
				challenge.setDonateCurrent(challenge.getDonateCurrent() - donation);
				challengeRepository.save(challenge);

				ChallengeUser challengeUser = challengeUserRepository.findByUserIdAndChallengeId(user, challenge);
				challengeUserRepository.delete(challengeUser);
				return challenge;
			} else {
				return null;
			}
		} else {
			return null;
		}

	}

	@Override
	public List<Integer> findByChallengeUserList(int userId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if (users.isPresent()) {
			User user = users.get();
			List<ChallengeUser> challengeUser = challengeUserRepository.findAllByUserId(user);
			List<Integer> challengeIds = new ArrayList<Integer>();
			for (ChallengeUser cu : challengeUser) {
				challengeIds.add(cu.getChallengeId().getChallengeId());
			}
			return challengeIds;
		} else {
			return null;
		}
	}

	@Override
	public void updateAccDistance(User user, double accDistance) {
		List<ChallengeUser> challengeUsers = challengeUserRepository.findAllByUserId(user);
		double newDistance;
		LocalDateTime today = LocalDateTime.now();
		for (ChallengeUser cu : challengeUsers) {
			if ((cu.getChallengeId().getEndTime()).isBefore(today) || cu.getChallengeId().getStartTime().isAfter(today))
				continue;

			// challenge update
			Optional<Challenge> challenges = challengeRepository
					.findByChallengeId(cu.getChallengeId().getChallengeId());
			if (challenges.isPresent()) {
				Challenge challenge = challenges.get();
				challenge.setDistanceCurrent(challenge.getDistanceCurrent() + accDistance);
				challengeRepository.save(challenge);

				// challenge_user update
				newDistance = cu.getAccDistance() + accDistance;
				cu.setAccDistance(newDistance);
				challengeUserRepository.save(cu); // update challenge user

			}
		}
	}

	@Override
	public List<User> findAllChallengeEqualDate() {
		List<User> successUsers = new ArrayList<User>();

		LocalDateTime yesterday = LocalDateTime.now().minusDays(1);
		yesterday = yesterday.withHour(03).withMinute(00).withSecond(00).withNano(0);

		List<Challenge> challenges = challengeRepository.findAllByEndTime(yesterday);

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
		Optional<User> users = userRepository.findByUserId(userId);
		if (users.isPresent()) {
			User user = users.get();
			ChallengeUser challengeUser = challengeUserRepository.findByUserIdAndChallengeId(user, challenge);
			return challengeUser;
		} else {
			return null;
		}
	}

	@Override
	public List<ChallengeUser> findAllChallengeUserByUserIdIng(int userId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if (users.isPresent()) {
			User user = users.get();
			List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserId(user);
			List<ChallengeUser> challengeUsers = new ArrayList<ChallengeUser>();

			LocalDateTime today = LocalDateTime.now();
			today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
			for (ChallengeUser cu : challengeUserList) {
				// 끝나는 시간이 오늘보다 나중이고, 시작시간이 오늘보다 이전인 경우
				if ((cu.getChallengeId().getEndTime()).isAfter(today)
						&& cu.getChallengeId().getStartTime().isBefore(today)) {
					challengeUsers.add(cu);
				}
			}
			return challengeUsers;
		} else {
			return null;
		}
	}

	// 참여 안하고 있는 챌린지
	@Override
	public List<ChallengeUser> findAllNonChallengeUserByUserIdIng(int userId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if (users.isPresent()) {
			User user = users.get();
			List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserIdNot(user);
			List<ChallengeUser> challengeUsers = new ArrayList<ChallengeUser>();

			LocalDateTime today = LocalDateTime.now();
			today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
			for (ChallengeUser cu : challengeUserList) {
				// 끝나는 시간이 오늘보다 나중이고, 시작시간이 오늘보다 이전인 경우
				if ((cu.getChallengeId().getEndTime()).isAfter(today)
						&& cu.getChallengeId().getStartTime().isBefore(today)) {
					challengeUsers.add(cu);
				}
			}
			return challengeUsers;

		} else {
			return null;
		}
	}

	@Override
	public List<ChallengeUser> findAllChallengeUserByUserIdComingSoon(int userId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if (users.isPresent()) {
			User user = users.get();
			List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserId(user);
			List<ChallengeUser> challengeUsers = new ArrayList<ChallengeUser>();

			LocalDateTime today = LocalDateTime.now();
			today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
			for (ChallengeUser cu : challengeUserList) {
				// 시작시간이 오늘보다 나중일 때
				if (cu.getChallengeId().getStartTime().isAfter(today)) {
					challengeUsers.add(cu);
				}
			}
			return challengeUsers;
		} else {
			return null;
		}

	}

	// 참여 안하고 있는것
	@Override
	public List<ChallengeUser> findAllNonChallengeUserByUserIdComingSoon(int userId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if (users.isPresent()) {
			User user = users.get();
			List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserIdNot(user);
			List<ChallengeUser> challengeUsers = new ArrayList<ChallengeUser>();

			LocalDateTime today = LocalDateTime.now();
			today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
			for (ChallengeUser cu : challengeUserList) {
				// 시작시간이 오늘보다 나중일 때
				if (cu.getChallengeId().getStartTime().isAfter(today)) {
					challengeUsers.add(cu);
				}
			}
			return challengeUsers;

		} else {
			return null;
		}

	}

	@Override
	public List<ChallengeUser> findAllChallengeUserByUserIdEnd(int userId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if (users.isPresent()) {
			User user = users.get();
			List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserId(user);
			List<ChallengeUser> challengeUsers = new ArrayList<ChallengeUser>();
			LocalDateTime today = LocalDateTime.now();
			today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
			for (ChallengeUser cu : challengeUserList) {
				// 끝나는 시간이 오늘보다 이전일때
				if ((cu.getChallengeId().getEndTime()).isBefore(today)) {
					challengeUsers.add(cu);
				}
			}
			return challengeUsers;
		} else {
			return null;
		}

	}

	// 참여 안하고 있는 것
	@Override
	public List<ChallengeUser> findAllNonChallengeUserByUserIdEnd(int userId) {
		Optional<User> users = userRepository.findByUserId(userId);
		if (users.isPresent()) {
			User user = users.get();
			List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserIdNot(user);
			List<ChallengeUser> challengeUsers = new ArrayList<ChallengeUser>();

			LocalDateTime today = LocalDateTime.now();
			today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
			for (ChallengeUser cu : challengeUserList) {
				// 끝나는 시간이 오늘보다 이전일때
				if ((cu.getChallengeId().getEndTime()).isBefore(today)) {
					challengeUsers.add(cu);
				}
			}
			return challengeUsers;

		} else {
			return null;
		}

	}

	@Override
	public void deleteAllChallengeUserByUserEmail(String userEmail) {
		Optional<User> users = userRepository.findByUserEmail(userEmail);
		if (users.isPresent()) {
			User user = users.get();
			List<ChallengeUser> challengeUserList = challengeUserRepository.findAllByUserId(user);

			LocalDateTime today = LocalDateTime.now();
			today = today.withHour(23).withMinute(59).withSecond(59).withNano(0);
			for (ChallengeUser cu : challengeUserList) {
				Optional<Challenge> challenges = challengeRepository.findByChallengeId(cu.getChallengeId().getChallengeId());
				if(challenges.isPresent()) {
					Challenge challenge = challenges.get();
					if (challenge.getEndTime().isBefore(today))
						continue;
					
					challenge.setParticipant(challenge.getParticipant() - 1);
					challenge.setDistanceCurrent(challenge.getDistanceCurrent() - cu.getAccDistance());
					challengeRepository.save(challenge);
				}
			}
		}
	}
}
