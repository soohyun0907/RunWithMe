package kr.co.rwm.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.rwm.model.Response;
import kr.co.rwm.model.ResponseMessage;
import kr.co.rwm.model.StatusCode;
import kr.co.rwm.service.JwtTokenProvider;
import kr.co.rwm.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins="*")
@RequiredArgsConstructor
@RequestMapping("/payment")
public class PaymentController {
	
	private final JwtTokenProvider jwtTokenProvider;
	private final UserService userService;
	
	// 충전
	@GetMapping("/charge/{money}")
	public ResponseEntity charge(@PathVariable int money, HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		if (jwtTokenProvider.validateToken(token)) {
			long uid = jwtTokenProvider.getUserIdFromJwt(token);
			userService.charge(uid, money);
			return new ResponseEntity<Response>(new Response(StatusCode.NO_CONTENT, ResponseMessage.CHARGE_SUCCESS),
					HttpStatus.OK);
		}else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED),
					HttpStatus.FORBIDDEN);
		}
	}
	// 소비
	@GetMapping("/{money}")
	public ResponseEntity payment(@PathVariable int money, HttpServletRequest request) {
		String token = request.getHeader("AUTH");
		if (jwtTokenProvider.validateToken(token)) {
			long uid = jwtTokenProvider.getUserIdFromJwt(token);
			if(userService.pay(uid, money)) {
				return new ResponseEntity<Response>(new Response(StatusCode.NO_CONTENT, ResponseMessage.PAY_SUCCESS),
						HttpStatus.OK);
			}else {
				return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.PAY_FAIL),
						HttpStatus.FORBIDDEN);
			}
		}else {
			return new ResponseEntity<Response>(new Response(StatusCode.FORBIDDEN, ResponseMessage.UNAUTHORIZED),
					HttpStatus.FORBIDDEN);
		}
	}
}
