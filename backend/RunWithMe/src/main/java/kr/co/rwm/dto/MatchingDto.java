package kr.co.rwm.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder

public class MatchingDto {
	
	private Integer matchId; 
	 
	private Integer masterId;
	
	private Integer guestId;
	
	private String roomId;
	
}
