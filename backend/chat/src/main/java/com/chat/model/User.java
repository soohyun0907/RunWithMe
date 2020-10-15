package com.chat.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class User {
	private long id;
	private String nickname;

	@Builder
	public User(long id, String nickname) {
		super();
		this.id = id;
		this.nickname = nickname;
	}

}
