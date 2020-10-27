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
public class Dong {

	@Id
	@Column(name = "dong_id")
	private Integer dongId;
	
	@Column(name = "dong_name")
	private String dongName;
	
	@ManyToOne
	@JoinColumn(name = "gugun_id", nullable = false)
	private Gugun gugunId;
	
}
