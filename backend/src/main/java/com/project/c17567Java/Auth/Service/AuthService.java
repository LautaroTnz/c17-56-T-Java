package com.project.c17567Java.Auth.Service;

import com.project.c17567Java.Auth.Dto.AuthResponse;
import com.project.c17567Java.Auth.Dto.LoginRequest;
import com.project.c17567Java.Auth.Dto.RegisterRequest;
import com.project.c17567Java.Auth.Jwt.JwtService;
import com.project.c17567Java.Auth.Repository.UserRepository;
import com.project.c17567Java.Auth.User.Role;
import com.project.c17567Java.Auth.Entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        User user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token = jwtService.getToken(user);
        String role = user.getRole().toString();
        Integer id = user.getId();
        return AuthResponse.builder()
                .token(token)
                .role(role)
                .id(id)
                .build();
    }

    public AuthResponse register(RegisterRequest request) {
        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode( request.getPassword()))
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .country(request.getCountry())
                .role(Role.ADMIN)
                .build();
        userRepository.save(user);

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();

    }
}