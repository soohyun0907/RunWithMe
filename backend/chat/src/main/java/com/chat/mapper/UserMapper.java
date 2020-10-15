package com.chat.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.chat.model.User;

@Mapper
public interface UserMapper {

	int createUser(User newUser);
	int signin(User user);
}
