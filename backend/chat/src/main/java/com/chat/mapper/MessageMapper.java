package com.chat.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.chat.model.Message;

@Mapper
public interface MessageMapper {

	int insertMessage(Message chatMessage);
	List<Message> getMessagesByChatroomId(@Param("roomId") long roomId, @Param("idx") long idx);

}
