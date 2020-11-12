package kr.co.rwm.dto;

import kr.co.rwm.entity.Running;
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
public class RecordDto {

	private Integer recordId;

	private Running runningId;

	private User userId;

	private double accDistance;

	private Long accTime;

	private double speed;
}
