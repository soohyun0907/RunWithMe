package com.chat.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class Message {
	private long id;
	private String content;
	private long chatroomId;
	private long senderId;
	private String senderNickname;

	@Builder
	public Message(long id, String content, long chatroomId, long senderId) {
		super();
		this.id = id;
		this.content = content;
		this.chatroomId = chatroomId;
		this.senderId = senderId;
	}

	public Message(long id, String content, long chatroomId, long senderId, String senderNickname) {
		super();
		this.id = id;
		this.content = content;
		this.chatroomId = chatroomId;
		this.senderId = senderId;
		this.senderNickname = senderNickname;
	}

}
