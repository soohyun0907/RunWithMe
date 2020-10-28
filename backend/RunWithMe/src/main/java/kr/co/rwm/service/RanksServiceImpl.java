package kr.co.rwm.service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Ranks;
import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;
import kr.co.rwm.entity.User;
import kr.co.rwm.repo.RanksRepository;
import kr.co.rwm.repo.RecordRepository;
import kr.co.rwm.repo.RunningRepository;
import kr.co.rwm.repo.UserRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class RanksServiceImpl implements RanksService{
	private final RanksRepository rankRepository;
	private final RecordRepository recordRepository;
	private final RunningRepository runningRepository;
	private final UserRepository userRepository;
	
	private final int DEFAULT_EXP = 0;
	
	// 회원가입시 활용 및 매달 스코어 초기화시 사용
	@Override
	public void join(User user) {
		rankRepository.save(Ranks.builder().gugunId(user.getGugunId()).userId(user).raceExp(DEFAULT_EXP).donateExp(DEFAULT_EXP).totalExp(DEFAULT_EXP).build());
	}

	@Override
	public void getRaceExp(int userId, int runningId) {
		// 해당 레코드아이디를 받아오고
		System.out.println("TEST");
		System.out.println(runningId);
		Running running = runningRepository.findByRunningId(runningId).get();
		List<Record> list = recordRepository.findAllRecordByRunningId(running);
		
		Comparator<Record> comparator = new Comparator<Record>() {
			@Override
			public int compare(Record o1, Record o2) {
				return Double.compare(o1.getAccDistance(), o2.getAccDistance());
			}
        };
        Collections.sort(list,comparator);
		
		double sum = 0.0;
		double distance = 0.0;
		double mul = 1;
		double add = 0.5;
		// 사용자 경험치 부여
		for(int i=0;i<list.size();i++) {
			Record temp = list.get(i);
			double realDistance = temp.getAccDistance();
			System.out.println("First "+sum+" "+realDistance);
			sum += ((realDistance - distance)+1) * (temp.getSpeed()*mul);
			System.out.println("Second "+sum+" "+realDistance);
			distance += realDistance;
			mul +=add;
		}
		User member = userRepository.findByUserId(userId).get();
		Optional<Ranks> user = rankRepository.findByUserId(member);
		Ranks temp = user.get();
		
		System.out.println(sum); // 획득 점수
		final double total = sum + temp.getTotalExp();
		sum += temp.getRaceExp();
		System.out.println(sum); // 획득 점수
		final double result = sum;
		user.ifPresent(selectUser->{
			selectUser.setRankId(temp.getRankId());
			selectUser.setUserId(temp.getUserId());
			selectUser.setDonateExp(temp.getDonateExp());
			selectUser.setGugunId(temp.getGugunId());
			selectUser.setTotalExp(total);
			selectUser.setRaceExp(result);
			rankRepository.save(selectUser);
		});
	}

	@Override
	public void getDonateExp(int userId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Ranks> raceTop() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Ranks> donateTop() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Ranks> totalTop() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Ranks> totalTopByRegion(int regionId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Ranks> totalRank() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<User> findByUserName(String userName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<User> findByUserId(int userId) {
		// TODO Auto-generated method stub
		return null;
	}

}