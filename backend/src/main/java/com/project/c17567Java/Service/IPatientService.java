package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.DoctorDto;
import com.project.c17567Java.Dto.HistoryDto;
import com.project.c17567Java.Dto.PatientDto;

import java.util.List;


public interface IPatientService {

    public void savePatient(PatientDto patientDto);
    public void deletePatient(Integer id);
    public List<PatientDto> getPatients();
    public PatientDto findPatientById(Integer id);
    public void editPatient(Integer id, PatientDto patientDto);
}
