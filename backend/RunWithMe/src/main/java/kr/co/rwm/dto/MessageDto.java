package kr.co.rwm.dto;

import java.util.Date;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

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
