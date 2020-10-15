package com.chat.service;

import java.util.List;

import com.chat.model.ChatRoom;

public interface IChatRoomService {
	long createRoom(ChatRoom newRoom);
	List<ChatRoom> getAllChatRooms();
	String getRoomTitle(long id);
}
