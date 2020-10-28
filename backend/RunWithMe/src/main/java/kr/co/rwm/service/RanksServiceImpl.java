package kr.co.rwm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import kr.co.rwm.entity.Ranks;
import kr.co.rwm.entity.User;
import kr.co.rwm.repo.RanksRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class RanksServiceImpl implements RanksService{
	private final RanksRepository rankRepository;
	private final int DEFAULT_EXP = 0;
	
	// 회원가입시 활용 및 매달 스코어 초기화시 사용
	@Override
	public void join(User user) {
		rankRepository.save(Ranks.builder().gugunId(user.getGugunId()).userId(user).raceExp(DEFAULT_EXP).donateExp(DEFAULT_EXP).totalExp(DEFAULT_EXP).build());
	}

	@Override
	public void getRaceExp(int userId, int recordId) {
		
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