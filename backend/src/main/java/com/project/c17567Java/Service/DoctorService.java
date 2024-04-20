package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.DoctorDto;
import com.project.c17567Java.Entity.Doctor;
import com.project.c17567Java.Entity.Specialty;
import com.project.c17567Java.Repository.IDoctorRepository;
import com.project.c17567Java.Repository.ISpecialtyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService implements IDoctorService{

    @Autowired
    private IDoctorRepository iDoctorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ISpecialtyRepository iSpecialtyRepository;
    @Override
    public void saveDoctor(DoctorDto doctorDto) {

        Doctor doctor = new Doctor();
        doctor.setUsername(doctorDto.getUsername());
        doctor.setPassword(passwordEncoder.encode(doctorDto.getPassword()));
        doctor.setEmail(doctorDto.getEmail());
        doctor.setFirstname(doctorDto.getFirstname());
        doctor.setLastname(doctorDto.getLastname());
        doctor.setCountry(doctorDto.getCountry());
        doctor.setDni(doctorDto.getDni());
        doctor.setRole(doctorDto.getRole());
        Specialty specialty = iSpecialtyRepository.findById(doctorDto.getSpeciality())
                .orElseThrow(() -> new RuntimeException("No se encontró la Specialty con id " + doctorDto.getSpeciality()));
        doctor.setSpeciality(specialty);
        doctor.setMedicalId(doctorDto.getMedicalId());
        doctor.setActive(doctorDto.getActive());


        iDoctorRepository.save(doctor);
    }

    @Override
    public DoctorDto findDoctorById(Integer id) {
        Doctor doctor = iDoctorRepository.findById(id).orElse(null);

        DoctorDto doctorDto = DoctorDto.builder()
                .id(doctor.getId())
                .username(doctor.getUsername())
                .email(doctor.getEmail())
                .firstname(doctor.getFirstname())
                .lastname(doctor.getLastname())
                .country(doctor.getCountry())
                .dni(doctor.getDni())
                .role(doctor.getRole())
                .speciality(doctor.getSpeciality().getId())
                .medicalId(doctor.getMedicalId())
                .active(doctor.isActive())
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
                        .id(doctor.getId())
                        .username(doctor.getUsername())
                        .email(doctor.getEmail())
                        .firstname(doctor.getFirstname())
                        .lastname(doctor.getLastname())
                        .country(doctor.getCountry())
                        .dni(doctor.getDni())
                        .role(doctor.getRole())
                        .speciality(doctor.getSpeciality().getId())
                        .medicalId(doctor.getMedicalId())
                        .active(doctor.isActive())
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
            Specialty specialty = iSpecialtyRepository.findById(doctorDto.getSpeciality())
                    .orElseThrow(() -> new RuntimeException("No se encontró la Specialty con id " + doctorDto.getSpeciality()));
            doctor.setSpeciality(specialty);
            doctor.setMedicalId(doctorDto.getMedicalId());
            doctor.setActive(doctorDto.getActive());

            iDoctorRepository.save(doctor);
        }
    }
}