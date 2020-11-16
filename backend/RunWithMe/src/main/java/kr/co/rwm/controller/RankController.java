package kr.co.rwm.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rwm.dto.RanksDto;
import kr.co.rwm.dto.UserDto;
import kr.co.rwm.entity.Ranks;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.RanksService;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/ranks")
public class RankController {
	private final RanksService rankService;
	
	// Top 10 기록 레이스 랭킹 조회
	@GetMapping("/top/race")
	public ResponseEntity<Response<? extends Object>> raceTopRanking() {
		List<RanksDto> result = rankService.raceTop();
		return new ResponseEntity<Response<? extends Object>>(new Response<>(StatusCode.OK,ResponseMessage.RACE_TOP_RANKING_OK,result),HttpStatus.OK);
	}

	// Top 10 기부 레이스 랭킹 조회
	@GetMapping("/top/donate")
	public ResponseEntity<Response<? extends Object>> donateTopRanking() {
		List<Ranks> result = rankService.donateTop();
		return new ResponseEntity<Response<? extends Object>>(new Response<>(StatusCode.OK,ResponseMessage.DONATE_TOP_RANKING_OK,result),HttpStatus.OK);
	}
	
	// 전체 경험치 순으로 랭킹 조회
	@GetMapping("/total")
	public ResponseEntity<Response<? extends Object>> totalRanking() {
		List<Ranks> result = rankService.totalRank();
		return new ResponseEntity<Response<? extends Object>>(new Response<>(StatusCode.OK,ResponseMessage.TOTAL_TOP_RANKING_OK,result),HttpStatus.OK);
	}

	// 전체 경험치 순으로 지역별 랭킹 조회
	@GetMapping("/region/total/{gugunId}")
	public ResponseEntity<Response<? extends Object>> regionTotalRanking(@PathVariable int gugunId) {
		List<Ranks> result = rankService.totalTopByRegion(gugunId);
		return new ResponseEntity<Response<? extends Object>>(new Response<>(StatusCode.OK,ResponseMessage.REGION_TOP_RANKING_OK,result),HttpStatus.OK);
	}
	
	// Top10 전체 경험치 순 랭킹 조회
	@GetMapping("/top/total")
	public ResponseEntity<Response<? extends Object>> totalTopRanking() {
		List<Ranks> result = rankService.totalTop();
		return new ResponseEntity<Response<? extends Object>>(new Response<>(StatusCode.OK,ResponseMessage.TOTAL_RANKING_OK,result),HttpStatus.OK);
	}

	// 조건부 검색을 통한 랭킹 정보 조회 (email, userId, userName)
	@PostMapping("/search")
	public ResponseEntity<Response<? extends Object>> searchRankingInfo(@RequestBody UserDto user) {
		List<Ranks> result = rankService.findByUserId(user);
		return new ResponseEntity<Response<? extends Object>>(new Response<>(StatusCode.OK,ResponseMessage.SEARCH_RANKER_OK,result),HttpStatus.OK);
	}
}
