package kr.co.rwm.dto;

import kr.co.rwm.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class FriendDto {
	
	private Integer fId;
	
	private Integer userId;
	
	private User user;
	
}
