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
public class RunningUserDto{
	
	private Integer runningUserId;
	
	private User userId;

	private double totalDistance;
	
	private Long totalTime;
	
	private Integer totalCount; 
	
}
