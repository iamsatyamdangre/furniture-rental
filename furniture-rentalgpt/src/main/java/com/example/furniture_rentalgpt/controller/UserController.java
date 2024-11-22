package com.example.furniture_rentalgpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponseException;
import org.springframework.web.bind.annotation.*;

import com.example.furniture_rentalgpt.model.User;
import com.example.furniture_rentalgpt.service.UserService;


@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
public ResponseEntity<String> signup(@RequestBody User user) {
    try {
        userService.registerUser(user);
        return ResponseEntity.ok("Signup successful");
    } catch (Exception e) {
        // Return simple error message
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                             .body("Signup failed: " + e.getMessage());
    }
}

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        try {
            boolean loginSuccess = userService.loginUser(user.getUsername(), user.getPassword());  // Handle plain text password comparison
            if (loginSuccess) {
                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
