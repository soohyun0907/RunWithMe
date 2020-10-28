package kr.co.rwm.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Challenge {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "challenge_id")
	private Integer challengeId;
	
	@Column(length = 500, name = "title", nullable = false)
	private String title;

	@Column(columnDefinition = "LONGTEXT", name = "content")
	private String content;
	
	@Column(name = "distance_goal")
	private double distanceGoal;
	
	@Column(name = "distance_current")
	private double distanceCurrent;
	
	@Column(name = "donate_goal")
	private long donateGoal;
	
	@Column(name = "donate_current")
	private long donateCurrent;
	
	@Column(name = "start_time")
	private LocalDateTime startTime;

	@Column(name = "end_time")
	private LocalDateTime endTime;
	
}
