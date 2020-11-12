package kr.co.rwm.dto;

import kr.co.rwm.entity.Challenge;
import kr.co.rwm.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ChallengeUserDto {
	
	private Integer challengeUserId;
	
	private Challenge challengeId;
	
	private User userId;
	
	private double accDistance;
	
	private boolean success;
	
	private Integer donation;
}
