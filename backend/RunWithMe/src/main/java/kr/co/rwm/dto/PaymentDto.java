package kr.co.rwm.dto;

import kr.co.rwm.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class PaymentDto {
	
	private Integer payId;
	
	private User userId;
	
	private Integer chargeMoney;
	
	private Integer payMoney;
	
}
