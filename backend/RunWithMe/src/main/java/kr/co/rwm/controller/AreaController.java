package kr.co.rwm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;
import kr.co.rwm.dto.GugunDto;
import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Running;
import kr.co.rwm.entity.Sido;
import kr.co.rwm.entity.User;
import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.AreaService;
import kr.co.rwm.service.RecordService;
import kr.co.rwm.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RequestMapping("/areas")
public class AreaController {
	
	private final AreaService areaService;
	private final UserService userService;
	private final RecordService recordService;
	
	@ApiOperation(value = "시도 전체 조회", response = ResponseEntity.class)
	@GetMapping
	public ResponseEntity findAllSido() {
		System.out.println("/areas/allSido");
		List<Sido> sidos = areaService.findAllSido();
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.SIDO_LIST_SUCCESS, sidos), HttpStatus.OK);
	}
	
	@ApiOperation(value = "시도 아이디를 이용해 구군 조회", response = ResponseEntity.class)
	@GetMapping("/{sidoId}")
	public ResponseEntity findAllBySidoId(@PathVariable int sidoId) {
		System.out.println("/areas/allGugun");
		Sido sido = areaService.findSidoBySidoId(sidoId);
		if(sido == null) {
			return new ResponseEntity<Response>(new 
				Response(StatusCode.NOT_FOUND, ResponseMessage.SIDO_SEARCH_FAIL, null), HttpStatus.NOT_FOUND);
		}
		List<Gugun> guguns = areaService.findAllGugunBySidoId(sido);
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.GUGUN_LIST_SUCCESS, guguns), HttpStatus.OK);
	}
	
	@ApiOperation(value = "유저의 활동 지역 설정", response = ResponseEntity.class)
	@PostMapping
	public ResponseEntity saveUserArea(@RequestBody GugunDto gugun) {
		System.out.println("/areas/save");
		// Gugun 확인
		Gugun saveGugun = areaService.findGugunByGugunId(gugun.getGugunId());
		if(saveGugun == null) {
			return new ResponseEntity<Response>(new 
				Response(StatusCode.NOT_FOUND, ResponseMessage.GUGUN_SEARCH_FAIL, null), HttpStatus.NOT_FOUND);
		}
		
		//
		User loginUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Optional<User> opLoginUser = Optional.ofNullable(loginUser);
		System.out.println("hi "+opLoginUser.get().getUserPw());
		loginUser.setGugunId(saveGugun);
		userService.profileUpdate(opLoginUser, loginUser);
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.ACTAREA_INSERT_SUCCESS, null), HttpStatus.OK);
	}
	
	@ApiOperation(value = "지역에 따른 유저의 달린 경로 보기", response = ResponseEntity.class)
	@GetMapping("/{gugunId}/{userId}")
	public ResponseEntity findAllRunningByUserIdAndGugunId(@PathVariable int gugunId, @PathVariable int userId) {
		List<Running> runnings = recordService.findAllRunningByGugunIdAndUserId(gugunId, userId);
		
		return new ResponseEntity<Response>(new 
				Response(StatusCode.OK, ResponseMessage.AREA_RUNNINGS_SUCCESS, runnings), HttpStatus.OK);
	}
	
}
