package kr.co.rwm.dto;

import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Running;
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
public class RunningAreaDto {

	private Integer runningAreaId;
	
	private Running running;
	
	private Gugun gugun;
	
}
