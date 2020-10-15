package com.chat.service;

import com.chat.model.User;

public interface IUserService {

	long createUser(User newUser);
	boolean signin(User user);

}
