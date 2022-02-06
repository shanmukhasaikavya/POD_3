package com.ogs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ogs.model.User;
import com.ogs.repo.UserRepository;
import com.ogs.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

//creating user
	public User createUser(User user) throws Exception {
		User usr = userRepository.findByEmail(user.getEmail());
		if (usr != null) {
			throw new Exception("User Already Exist");
		} else {
			usr = userRepository.save(user);
		}
		return usr;
	}

//check user is registered(login)
	public User checkUser(String email, String password) {
		if(email.equals("admin@gmail.com")&& password.equals("admin"))
		{
			User admin = new User(email);
			return admin;
		}
		User usr = userRepository.findByEmail(email);
		if (usr == null) {
			System.out.println("Email does not exist");
		}
		if (!usr.getPassword().equals(password)) {
			System.out.println("Password missmacth");
			return null;
		}
		return usr;
	}

}