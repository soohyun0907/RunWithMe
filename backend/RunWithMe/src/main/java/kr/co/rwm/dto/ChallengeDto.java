package kr.co.rwm.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ChallengeDto {
	
	private Integer challengeId;
	
	private String title;

	private String content;
	
	private double distanceGoal;
	
	private double distanceCurrent;
	
	private long donateGoal;
	
	private long donateCurrent;
	
	private LocalDateTime startTime;

	private LocalDateTime endTime;
	
	private double personalDistanceGoal;
	
	private String challengeImg;
	
	private int participant;
	
}
