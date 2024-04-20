package com.project.c17567Java.Entity;

import com.project.c17567Java.Auth.Entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Doctor extends User {
    @ManyToOne
    @JoinColumn(name = "speciality_id", nullable = false)
    private Specialty speciality;

    @Column(nullable = false)
    private long medicalId;

    @Column(nullable = false)
    private boolean active;

}