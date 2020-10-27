package kr.co.rwm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

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
public class Gugun {

	@Id
	@Column(name = "gugun_id")
	private Integer gugunId;
	
	@Column(name = "gugun_name")
	private String gugunName;
	
	@ManyToOne
	@JoinColumn(name = "sido_id", nullable = false)
	private Sido sidoId;
	
}

