package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.PatientDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IPatientService {

    public void savePatient(PatientDto patientDto);
    public void deletePatient(Integer id);
    public List<PatientDto> getPatients();
    public void editPatient(Integer id, PatientDto patientDto);
}
