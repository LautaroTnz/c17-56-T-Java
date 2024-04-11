package com.project.c17567Java.Entity;

import com.project.c17567Java.Auth.Entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Receptionist extends User {
    @Column(nullable = false)
    private long receptionistId;
}
