package com.project.c17567Java.Dto;

import com.project.c17567Java.Entity.Doctor;
import com.project.c17567Java.Entity.Patient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TurnDto {
    private Integer id;
    private Integer patient;
    private Integer doctor;
    private LocalDate date;
    private LocalTime time;
    private Boolean state;

}
