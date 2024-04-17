package com.project.c17567Java.Entity;

import com.project.c17567Java.Auth.Entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Patient extends User {
    @Column(nullable = false)
    private Long patientId;
    @OneToMany
    private List<History> clinicalHistory;
}