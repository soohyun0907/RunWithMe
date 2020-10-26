package kr.co.rwm.entity;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

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
public class Running {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "running_id")
	private Integer runningId;
	
	@Column(name = "user_id", nullable = false)
	private Integer userId;
	
	@Column(name = "polyline", columnDefinition = "LONGTEXT")
	private String polyline;
	
	@Column(name = "start_time")
	private LocalDateTime startTime;
	
	@Column(name = "end_time")
	private LocalDateTime endTime;
	
	@Column(name = "accumulated_distance", nullable = false)
	private double accDistance;
	
	@Column(name = "accumulated_time", nullable = false)
	private Long accTime;
	
	@Column(name = "thumbnail", length = 300)
	private String thumbnail;
	
	@Transient
	private Date date;
	
}