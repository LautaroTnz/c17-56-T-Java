package com.project.c17567Java.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class History {
    @Id
    @GeneratedValue
    private Integer id_history;
    @ManyToOne
    private Doctor doctor;
    @ManyToOne
    private Patient patient;
    private LocalDate date;
    private String description;
}
