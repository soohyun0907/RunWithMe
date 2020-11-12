package kr.co.rwm.dto;

import java.time.LocalDateTime;
import java.util.List;

import kr.co.rwm.entity.Record;
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
public class RunningDto {
	private Integer runningId;
	
	private Integer userId;
	
	private String polyline;
	
	private LocalDateTime startTime;
	
	private LocalDateTime endTime;
	
	private double accDistance;
	
	private Long accTime;
	
	private String thumbnail;
	
    private List<RunningAreaDto> runningArea;
	
    private List<Record> record;
}
