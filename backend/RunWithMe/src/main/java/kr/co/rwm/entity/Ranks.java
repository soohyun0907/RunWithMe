package kr.co.rwm.entity;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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
public class Ranks {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="rank_id")
	private Integer rankId;
	
	@OneToOne(cascade = CascadeType.ALL)
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
	
	@Column(name = "tier", columnDefinition = "default 0")
	private Integer tier;
	
}
