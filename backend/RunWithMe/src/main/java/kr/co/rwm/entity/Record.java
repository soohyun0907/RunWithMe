package kr.co.rwm.entity;

import java.io.Serializable;
import java.util.Date;

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
public class Record implements Serializable {
	
	/**
	 * Redis에 올리려면 Serializable 필요
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "record_id")
	private Integer recordId;
	
	@Column(name = "running_id")
	private Integer runningId;
	
	@Column(name = "user_id", nullable = false)
	private Integer userId;
	
	@Column(name = "accumulated_distance", nullable = false)
	private double accDistance;
	
	@Column(name = "accumulated_time", nullable = false)
	private double accTime;
	
}