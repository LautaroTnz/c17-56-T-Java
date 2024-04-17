package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.DoctorDto;
import com.project.c17567Java.Entity.Doctor;
import com.project.c17567Java.Repository.IDoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService implements IDoctorService{

    @Autowired
    private IDoctorRepository iDoctorRepository;

    @Override
    public void saveDoctor(DoctorDto doctorDto) {

        Doctor doctor = new Doctor();
        doctor.setUsername(doctorDto.getUsername());
        doctor.setPassword(doctorDto.getPassword());
        doctor.setEmail(doctorDto.getEmail());
        doctor.setFirstname(doctorDto.getFirstname());
        doctor.setLastname(doctorDto.getLastname());
        doctor.setCountry(doctorDto.getCountry());
        doctor.setDni(doctorDto.getDni());
        doctor.setRole(doctorDto.getRole());
        doctor.setSpecialityId(doctorDto.getSpecialityId());
        doctor.setMedicalId(doctorDto.getMedicalId());

        iDoctorRepository.save(doctor);
    }

    @Override
    public DoctorDto findDoctorById(Integer id) {
        Doctor doctor = iDoctorRepository.findById(id).orElse(null);

        DoctorDto doctorDto = DoctorDto.builder()
                .username(doctor.getUsername())
                .password(doctor.getPassword())
                .email(doctor.getPassword())
                .firstname(doctor.getFirstname())
                .lastname(doctor.getLastname())
                .country(doctor.getCountry())
                .dni(doctor.getDni())
                .role(doctor.getRole())
                .specialityId(doctor.getSpecialityId())
                .medicalId(doctor.getMedicalId())
                .build();

        return doctorDto;
    }

    @Override
    public void deleteDoctor(Integer id) {
        iDoctorRepository.deleteById(id);
    }

    @Override
    public List<DoctorDto> getDoctors() {

        List<DoctorDto> doctorDtoList = iDoctorRepository.findAll()
                .stream()
                .map(doctor -> DoctorDto.builder()
                        .username(doctor.getUsername())
                        .password(doctor.getPassword())
                        .email(doctor.getPassword())
                        .firstname(doctor.getFirstname())
                        .lastname(doctor.getLastname())
                        .country(doctor.getCountry())
                        .dni(doctor.getDni())
                        .role(doctor.getRole())
                        .specialityId(doctor.getSpecialityId())
                        .medicalId(doctor.getMedicalId())
                        .build())
                .toList();

        return doctorDtoList;
    }

    @Override
    public void editDoctor(Integer id, DoctorDto doctorDto) {

        Optional<Doctor> doctorOptional = iDoctorRepository.findById(id);

        if (doctorOptional.isPresent()){
            Doctor doctor = doctorOptional.get();

            doctor.setUsername(doctorDto.getUsername());
            doctor.setPassword(doctorDto.getPassword());
            doctor.setEmail(doctorDto.getEmail());
            doctor.setFirstname(doctorDto.getFirstname());
            doctor.setLastname(doctorDto.getLastname());
            doctor.setCountry(doctorDto.getCountry());
            doctor.setDni(doctorDto.getDni());
            doctor.setRole(doctorDto.getRole());
            doctor.setSpecialityId(doctorDto.getSpecialityId());
            doctor.setMedicalId(doctorDto.getMedicalId());

            iDoctorRepository.save(doctor);

        }
    }


}
