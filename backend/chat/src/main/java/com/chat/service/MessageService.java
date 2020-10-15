package com.chat.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.chat.mapper.MessageMapper;
import com.chat.model.Message;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service

public class MessageService implements IMessageService {
	private final MessageMapper messageMapper;

	@Override
	public int insertMessage(Message chatMessage) {
		return messageMapper.insertMessage(chatMessage);
	}

	@Override
	public List<Message> getMessagesByChatroomId(long id, long idx) {
		return messageMapper.getMessagesByChatroomId(id, idx);
	}

}
