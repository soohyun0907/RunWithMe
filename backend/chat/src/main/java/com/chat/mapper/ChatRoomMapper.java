package com.chat.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.chat.model.ChatRoom;

@Mapper
public interface ChatRoomMapper {

	int createRoom(ChatRoom newRoom);
	List<ChatRoom> getAllChatRooms();
	String getRoomTitle(long id);

}
