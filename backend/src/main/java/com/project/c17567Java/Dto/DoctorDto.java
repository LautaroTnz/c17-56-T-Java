package com.project.c17567Java.Dto;

import com.project.c17567Java.Auth.User.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDto {
    private String username;
    private String password;
    private String email;
    private String firstname;
    private String lastname;
    private String country;
    private Long dni;
    @Enumerated(EnumType.STRING)
    private Role role;
    private String speciality;
    private long medicalId;
}
