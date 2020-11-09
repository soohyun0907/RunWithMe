package kr.co.rwm.entity;


import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

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
public class Ranks implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="rank_id")
	private Integer rankId;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id",referencedColumnName = "user_id")
	private User userId;

//	@ManyToOne
//	@JoinColumn(name="gugun_id", nullable = false)
//	private Gugun gugunId;
	
	@Column(name = "race_exp", nullable = false)
	private double raceExp;
	
	@Column(name = "donate_exp", nullable = false)
	private double donateExp;
	
	
	@Column(name = "total_exp", nullable = false)
	private double totalExp;
	
	@Column(name = "tier", columnDefinition = "Integer default 0")
	private Integer tier;
	
}
