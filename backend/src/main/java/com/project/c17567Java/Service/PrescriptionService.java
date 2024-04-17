package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.PrescriptionDto;
import com.project.c17567Java.Entity.Prescription;
import com.project.c17567Java.Repository.IPrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrescriptionService implements IPrescriptionService{

    @Autowired
    private IPrescriptionRepository iPrescriptionRepository;

    @Override
    public void savePrescription(PrescriptionDto prescriptionDto) {
        Prescription prescription = new Prescription();
        prescription.setDate(prescriptionDto.getDate());
        prescription.setDescription(prescriptionDto.getDescription());
        prescription.setPatient(prescriptionDto.getPatient());
        prescription.setDoctor(prescriptionDto.getDoctor());


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
                        .description(prescription.getDescription())
                        .doctor(prescription.getDoctor())
                        .patient(prescription.getPatient())
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
                        .description(prescription.getDescription())
                        .doctor(prescription.getDoctor())
                        .patient(prescription.getPatient())
                        .build())
                .toList();
        return prescriptions;
    }

}
