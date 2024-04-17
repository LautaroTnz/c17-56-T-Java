package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.DoctorDto;


import java.util.List;


public interface IDoctorService {

    public void saveDoctor(DoctorDto doctorDto);
    public void deleteDoctor(Integer id);
    public DoctorDto findDoctorById(Integer id);
    public List<DoctorDto> getDoctors();
    public void editDoctor(Integer id, DoctorDto doctorDto);
}
