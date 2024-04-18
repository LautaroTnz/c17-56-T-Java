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
public class TurnDto {

    private Integer patient;
    private Integer doctor;
//    private LocalDate date;
//    private LocalDate time;
    private Boolean state;
}
