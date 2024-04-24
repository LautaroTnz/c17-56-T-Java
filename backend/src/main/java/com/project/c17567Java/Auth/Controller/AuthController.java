package com.project.c17567Java.Auth.Controller;

import com.project.c17567Java.Auth.Dto.AuthResponse;
import com.project.c17567Java.Auth.Dto.LoginRequest;
import com.project.c17567Java.Auth.Dto.RegisterRequest;
import com.project.c17567Java.Auth.Service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://mydoctorapp.vercel.app"})

public class AuthController {

    private final AuthService authService;
    @PostMapping(value = "login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request){
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping(value = "register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authService.register(request));
    }
}
