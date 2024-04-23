package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.PrescriptionDto;
import com.project.c17567Java.Entity.Doctor;
import com.project.c17567Java.Entity.Patient;
import com.project.c17567Java.Entity.Prescription;
import com.project.c17567Java.Repository.IDoctorRepository;
import com.project.c17567Java.Repository.IPatientRepository;
import com.project.c17567Java.Repository.IPrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrescriptionService implements IPrescriptionService{

    @Autowired
    private IPrescriptionRepository iPrescriptionRepository;
    @Autowired
    private IPatientRepository iPatientRepository;
    @Autowired
    private IDoctorRepository iDoctorRepository;

    @Override
    public void savePrescription(PrescriptionDto prescriptionDto) {
        Optional<Patient> patient = iPatientRepository.findById(prescriptionDto.getPatient());
        Optional<Doctor> doctor = iDoctorRepository.findById(prescriptionDto.getDoctor());

        Prescription prescription = Prescription.builder()
                .date(prescriptionDto.getDate())
                .description(prescriptionDto.getDescription())
                .patient(patient.get())
                .doctor(doctor.get())
                .build();

        iPrescriptionRepository.save(prescription);
    }

    @Override
    public void deletePrescription(Integer id) {
        iPrescriptionRepository.deleteById(id);
    }

    @Override
    public List<PrescriptionDto> getPrescriptionsByDoctor(Integer id) {
        List<PrescriptionDto> prescriptions = iPrescriptionRepository.findPrescriptionsByDoctorId(id)
                .stream()
                .map(prescription -> PrescriptionDto.builder()
                        .date(prescription.getDate())
                        .id(prescription.getId())
                        .description(prescription.getDescription())
                        .doctor(prescription.getDoctor().getId())
                        .patient(prescription.getPatient().getId())
                        .build())
                .toList();
        return prescriptions;
    }

    @Override
    public List<PrescriptionDto> getPrescriptionsByPatient(Integer id) {
        List<PrescriptionDto> prescriptions = iPrescriptionRepository.findPrescriptionsByPatientId(id)
                .stream()
                .map(prescription -> PrescriptionDto.builder()
                        .date(prescription.getDate())
                        .id(prescription.getId())
                        .description(prescription.getDescription())
                        .doctor(prescription.getDoctor().getId())
                        .patient(prescription.getPatient().getId())
                        .build())
                .toList();
        return prescriptions;
    }

}
