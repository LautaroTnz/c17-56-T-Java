package com.project.c17567Java.Auth.Controller;

import com.project.c17567Java.Auth.Dto.UserDTO;
import com.project.c17567Java.Auth.Dto.UserRequest;
import com.project.c17567Java.Auth.Dto.UserResponse;
import com.project.c17567Java.Auth.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/user")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://mydoctorapp.vercel.app"})

public class UserController {
    private final UserService userService;

    @GetMapping(value = "{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable Integer id)
    {
        UserDTO userDTO = userService.getUser(id);
        if (userDTO==null)
        {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(userDTO);
    }

    @PutMapping()
    public ResponseEntity<UserResponse> updateUser(@RequestBody UserRequest userRequest)
    {
        return ResponseEntity.ok(userService.updateUser(userRequest));
    }
}
