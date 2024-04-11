package com.project.c17567Java.Service;

import com.project.c17567Java.Controller.dto.DoctorDto;
import com.project.c17567Java.Entity.Doctor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IDoctorService {

    public void saveDoctor(DoctorDto doctorDto);
    public void deleteDoctor(Integer id);
    public DoctorDto findDoctorById(Integer id);
    public List<DoctorDto> getDoctors();
    public void editDoctor(Integer id, DoctorDto doctorDto);
}
