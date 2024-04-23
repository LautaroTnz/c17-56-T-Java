package com.project.c17567Java.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
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
    private String title;
    private String description;
    private LocalDateTime start;
    private LocalDateTime end;
}