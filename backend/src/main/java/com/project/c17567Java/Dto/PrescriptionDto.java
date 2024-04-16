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
public class PrescriptionDto {

        private LocalDate date;
        private String description;
        private Patient patient;
        private Doctor doctor;

}
