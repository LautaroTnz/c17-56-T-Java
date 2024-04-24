package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.HistoryDto;
import com.project.c17567Java.Dto.PatientDto;
import com.project.c17567Java.Entity.Patient;
import com.project.c17567Java.Repository.IHistoryRepository;
import com.project.c17567Java.Repository.IPatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService implements IPatientService{

    @Autowired
    private IPatientRepository iPatientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void savePatient(PatientDto patientDto) {

        Patient patient = new Patient();
        patient.setUsername(patientDto.getUsername());
        patient.setPassword(passwordEncoder.encode(patientDto.getPassword()));
        patient.setEmail(patientDto.getEmail());
        patient.setFirstname(patientDto.getFirstname());
        patient.setLastname(patientDto.getLastname());
        patient.setCountry(patientDto.getCountry());
        patient.setDni(patientDto.getDni());
        patient.setRole(patientDto.getRole());
        patient.setPatientId(patientDto.getPatientId());

        iPatientRepository.save(patient);
    }

    @Override
    public void deletePatient(Integer id) {
        iPatientRepository.deleteById(id);
    }

    @Override
    public List<PatientDto> getPatients() {

        List<PatientDto> patientDtoList = iPatientRepository.findAll()
                .stream()
                .map(patient -> PatientDto.builder()
                        .id(patient.getId())
                        .username(patient.getUsername())
                        .email(patient.getEmail())
                        .firstname(patient.getFirstname())
                        .lastname(patient.getLastname())
                        .country(patient.getCountry())
                        .dni(patient.getDni())
                        .role(patient.getRole())
                        .patientId(patient.getPatientId())
                        .build())
                .toList();

        return patientDtoList;
    }

    @Override
    public PatientDto findPatientById(Integer id){
        Patient patient = iPatientRepository.findById(id).orElse(null);

        PatientDto patientDto = PatientDto.builder()
                .id(patient.getId())
                .username(patient.getUsername())
                .email(patient.getEmail())
                .firstname(patient.getFirstname())
                .lastname(patient.getLastname())
                .country(patient.getCountry())
                .dni(patient.getDni())
                .role(patient.getRole())
                .patientId(patient.getPatientId())
                .build();
        return patientDto;
    }

    @Override
    public void editPatient(Integer id, PatientDto patientDto) {

        Optional<Patient> patientOptional = iPatientRepository.findById(id);

        if (patientOptional.isPresent()){
            Patient patient = patientOptional.get();

            patient.setUsername(patientDto.getUsername());
            patient.setPassword(patientDto.getPassword());
            patient.setEmail(patientDto.getEmail());
            patient.setFirstname(patientDto.getFirstname());
            patient.setLastname(patientDto.getLastname());
            patient.setCountry(patientDto.getCountry());
            patient.setDni(patientDto.getDni());
            patient.setRole(patientDto.getRole());
            patient.setPatientId(patientDto.getPatientId());

            iPatientRepository.save(patient);

        }
    }

}
