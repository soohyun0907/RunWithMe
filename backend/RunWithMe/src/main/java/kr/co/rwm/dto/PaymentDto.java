package kr.co.rwm.dto;

import kr.co.rwm.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PaymentDto {
	
	private Integer payId;
	
	private User userId;
	
	private Integer chargeMoney;
	
	private Integer payMoney;
	
}
