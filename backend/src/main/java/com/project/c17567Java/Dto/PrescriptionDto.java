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
public class PrescriptionDto {

        private Integer id;
        private LocalDate date;
        private String description;
        private Integer patient;
        private Integer doctor;

}
