package com.ogs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ogs.model.Product;
import com.ogs.model.User;

import com.ogs.service.UserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	

	//creating user(register user)
	@PostMapping("/register")
	public ResponseEntity<User> createUser(@RequestBody User user) throws Exception {
		return new ResponseEntity<User>(userService.createUser(user), HttpStatus.CREATED);
	}
	//login user
	@PostMapping("/login")
	public User checkUser(@RequestBody User user) {
		return userService.checkUser(user.getEmail(), user.getPassword());
	}
	
	
}
