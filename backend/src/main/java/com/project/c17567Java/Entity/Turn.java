package com.project.c17567Java.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Turn {

    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_patient", nullable = false)
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "id_doctor", nullable = false)
    private Doctor doctor;

    private LocalDate date;
    private LocalTime time;
    private Boolean state;
    private String title;
    private String description;

    @Transient // No es necesario mapear estos campos a la base de datos
    private LocalDateTime start;

    @Transient
    private LocalDateTime end;
}
