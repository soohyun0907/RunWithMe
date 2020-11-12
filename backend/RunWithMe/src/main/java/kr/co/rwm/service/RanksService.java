package kr.co.rwm.service;

import java.util.List;

import kr.co.rwm.dto.UserDto;
import kr.co.rwm.entity.Ranks;
import kr.co.rwm.entity.User;

public interface RanksService {
	// 회원가입 동시에 rank 테이블에 생성
	void join(User user); 
	
	// 경험치 쌓기(기록) - 기록id로 분석해서 점수 책정
	void getRaceExp(int userId,int runningId);
	
	// 경험치 쌓기(기부) - 챌린지 달성하면 무조건 쌓임
	void getDonateExp(List<User> user);
	
	// 경험치 top 10 (기록) - 사용자 이름, 점수, 
	List<Ranks> raceTop();
	
	// 경험치 top 10 (기부)
	List<Ranks> donateTop();
	
	// 경험치 top 10 (total)
	List<Ranks> totalTop();
	
	// 경험치 top 10 (total) - 지역별
	List<Ranks> totalTopByRegion(int gugunId);
	
	// 경험치 전체 목록
	List<Ranks> totalRank();
	
	// 사용자 랭킹관련 정보 조회
	List<Ranks> findByUserId(UserDto userId);
	
	// 랭크 사용자 삭제
	void deleteByUserId(User userId);
}
