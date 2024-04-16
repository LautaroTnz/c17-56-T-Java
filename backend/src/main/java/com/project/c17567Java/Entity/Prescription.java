package com.project.c17567Java.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Prescription {
    @Id
    @GeneratedValue
    private Integer id;
    private LocalDate date;
    @Column(nullable = false)
    private String description;
    @ManyToOne
    private Patient patient;
    @ManyToOne
    private Doctor doctor;

}
