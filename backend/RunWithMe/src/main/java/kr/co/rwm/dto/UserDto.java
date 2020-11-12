package kr.co.rwm.dto;

import java.util.ArrayList;
import java.util.List;

import kr.co.rwm.entity.ChallengeUser;
import kr.co.rwm.entity.Gugun;
import kr.co.rwm.entity.Ranks;
import kr.co.rwm.entity.Record;
import kr.co.rwm.entity.Running;
import kr.co.rwm.entity.RunningUser;
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
public class UserDto {
	private Integer userId;

	private Gugun gugunId;

	private String userEmail;

	private String userPw;

	private String userName;

	private String profile;

	private boolean emailAuth;
	
	private Integer gender;
	
	private Integer mileage;
	
	private Ranks rank;
	
	private RunningUser runningUser;
	
	private List<Record> record;
	
	private List<Running> running;
	
	private List<ChallengeUser> challengeUser;
	
	private String changePw;

	private List<String> roles = new ArrayList<>();

	public boolean getAuth() {
		return this.emailAuth;
	}
	public String getPassword() {
		return this.userPw;
	}
	public String getUsername() {
		return this.userName;
	}
}
