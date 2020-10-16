package kr.co.rwm.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

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
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "dong_id", nullable = false)
	private Integer dongId;
	
	@Column(name = "user_pw", nullable = false)
	private String userPw;
	
	@Column(name = "user_name", nullable = false)
	private String userName;
	
	@Column(name = "user_address_1")
	private String userAddress1;
	
	@Column(name = "user_address_2")
	private String userAddress2;
	
	@Column(name = "user_address_3")
	private String userAddress3;

	@Column(name = "profile")
	private String profile;

	@ElementCollection
	@Builder.Default
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private List<String> roles = new ArrayList<>();

}
