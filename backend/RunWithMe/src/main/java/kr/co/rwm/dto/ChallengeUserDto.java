package kr.co.rwm.dto;

import java.util.Date;

import kr.co.rwm.entity.Challenge;
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
public class ChallengeUserDto {
	
	private Integer challengeUserId;
	
	private Challenge challengeId;
	
	private User userId;
	
	private double accDistance;
	
	private boolean success;
	
	private Integer donation;
}
