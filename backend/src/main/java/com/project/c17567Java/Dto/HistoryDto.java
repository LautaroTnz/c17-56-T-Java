package com.project.c17567Java.Dto;

import com.project.c17567Java.Entity.Doctor;
import com.project.c17567Java.Entity.Patient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HistoryDto {
    private String description;
    private Doctor doctor;
    private Patient patient;
    private LocalDate date;
}
