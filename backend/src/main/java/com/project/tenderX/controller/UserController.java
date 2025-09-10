package com.project.tenderX.controller;

import com.project.tenderX.model.User;
import com.project.tenderX.security.JwtService;
import com.project.tenderX.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")

public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user) {
        try {
            User registeredUser = userService.registerUser(user);

            // Generate JWT token
            String token = jwtService.generateToken(user.getUsername());

            Map<String, Object> response = new HashMap<>();
            response.put("message", "User registered successfully");
            response.put("user", registeredUser);
            response.put("token", token);

            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");

        Optional<User> userOptional = userService.getUserByUsername(username);
        if (userOptional.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "User not found"));
        }

        User user = userOptional.get();
      
        if (!passwordEncoder.matches(password, user.getPassword())) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid password"));
        }

        String token = jwtService.generateToken(user.getUsername());

        Map<String, Object> response = new HashMap<>();
        response.put("message", "Login successful");
        response.put("user", user);
        response.put("token", token);

        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user.get());
        }
        return ResponseEntity.notFound().build();
    }
}