package com.example.furniture_rentalgpt.service;

import com.example.furniture_rentalgpt.model.User;
import com.example.furniture_rentalgpt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new IllegalArgumentException("Username already exists");
        }
        // No password hashing for now, directly storing plain text passwords (not recommended)
        userRepository.save(user);
    }

    public boolean loginUser(String username, String password) {
        User existingUser = userRepository.findByUsername(username);
        if (existingUser != null && existingUser.getPassword().equals(password)) {
            return true;
        }
        return false;
    }
}
