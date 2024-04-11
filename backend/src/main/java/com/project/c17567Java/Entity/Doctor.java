package com.project.c17567Java.Entity;

import com.project.c17567Java.Auth.Entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Doctor extends User {
    @Column(nullable = false)
    private String speciality;
    @Column(nullable = false)
    private long medicalId;
}
