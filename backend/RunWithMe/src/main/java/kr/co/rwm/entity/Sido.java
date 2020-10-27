package kr.co.rwm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
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
public class Sido {

	@Id
	@Column(name = "sido_id")
	private Integer sidoId;
	
	@Column(name = "sido_name")
	private String sidoName;
	
}
