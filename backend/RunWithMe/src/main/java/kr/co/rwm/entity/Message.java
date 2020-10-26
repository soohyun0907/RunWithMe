package kr.co.rwm.entity;

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

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "m_id")
	private Integer mId;
	
	@Column(name = "room_id")
	private Integer roomId;
	
	@Column(name = "user_id", nullable = false)
	private Integer userId;
	
	@Column(name = "message", nullable = false)
	private String message;
	
	@Column(name = "message_regtime", nullable = false)
	private Date messageRegtime;
	
	
	
}
