package kr.co.rwm.dto;

import java.util.Date;

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
public class MessageDto {
	
	private Integer mId;
	
	private Integer roomId;
	
	private Integer userId;
	
	private String message;
	
	private Date messageRegtime;
	
}
