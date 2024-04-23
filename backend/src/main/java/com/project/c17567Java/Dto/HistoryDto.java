package com.project.c17567Java.Dto;


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
    private Integer id;
    private String description;
    private Integer doctor;
    private Integer patient;
    private LocalDate date;
}
