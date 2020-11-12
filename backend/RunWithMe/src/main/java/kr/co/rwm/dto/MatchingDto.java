package kr.co.rwm.dto;

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

public class MatchingDto {
	
	private Integer matchId; 
	 
	private Integer masterId;
	
	private Integer guestId;
	
	private String roomId;
	
}
