package com.chat.service;

import java.util.List;

import com.chat.model.Message;

public interface IMessageService {
	int insertMessage(Message chatMessage);
	List<Message> getMessagesByChatroomId(long id, long idx);
}
