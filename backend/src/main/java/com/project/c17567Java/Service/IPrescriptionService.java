package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.PrescriptionDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IPrescriptionService {

    void savePrescription(PrescriptionDto prescriptionDto);

    void deletePrescription(Integer id);

    List<PrescriptionDto> getPrescriptionsByDoctor(Integer id);

    List<PrescriptionDto> getPrescriptionsByPatient(Integer id);
}
