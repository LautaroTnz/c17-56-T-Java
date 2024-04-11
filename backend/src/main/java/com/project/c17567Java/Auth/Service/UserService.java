package com.project.c17567Java.Auth.Service;

import com.project.c17567Java.Auth.Dto.UserDTO;
import com.project.c17567Java.Auth.Dto.UserResponse;
import com.project.c17567Java.Auth.Entity.User;
import com.project.c17567Java.Auth.Dto.UserRequest;
import com.project.c17567Java.Auth.Repository.UserRepository;
import com.project.c17567Java.Auth.User.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public UserResponse updateUser(UserRequest userRequest) {
        User user = User.builder()
                .id(userRequest.getId())
                .firstname(userRequest.getFirstname())
                .lastname(userRequest.getLastname())
                .country(userRequest.getCountry())
                .role(Role.ADMIN)
                .build();

        userRepository.updateUser(user.getId(), user.getFirstname(), user.getLastname(), user.getCountry());

        return new UserResponse("El usuario se registró satisfactoriamente");
    }

    public UserDTO getUser(Integer id) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            UserDTO userDTO = UserDTO.builder()
                    .id(user.getId())
                    .username(user.getUsername())
                    .firstname(user.getFirstname())
                    .lastname(user.getLastname())
                    .country(user.getCountry())
                    .build();
            return userDTO;
        }
        return null;
    }
}
