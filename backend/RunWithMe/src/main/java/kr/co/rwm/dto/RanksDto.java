package kr.co.rwm.dto;

import kr.co.rwm.entity.RunningUser;
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
public class RanksDto {

	private Integer rankId;

	private User userId;

	private double raceExp;

	private double donateExp;

	private double totalExp;

	private Integer tier;
	
	private RunningUser running;

}
