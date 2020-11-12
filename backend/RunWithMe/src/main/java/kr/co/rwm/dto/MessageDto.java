package kr.co.rwm.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
