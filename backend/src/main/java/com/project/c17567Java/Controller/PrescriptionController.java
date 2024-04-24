package com.project.c17567Java.Controller;

import com.project.c17567Java.Dto.PrescriptionDto;
import com.project.c17567Java.Service.PrescriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/prescription")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://mydoctorapp.vercel.app"})
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @PostMapping("/save")
    public ResponseEntity<PrescriptionDto> savePrescription(@RequestBody PrescriptionDto prescriptionDto){
        prescriptionService.savePrescription(prescriptionDto);
        return ResponseEntity.ok(prescriptionDto);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePrescription(@PathVariable Integer id){
        prescriptionService.deletePrescription(id);
        return ResponseEntity.ok("La receta id" + id + "se ha eliminado");
    }

    @GetMapping("/findprescriptionsbydoctor/{id}")
    public ResponseEntity<List<PrescriptionDto>> findPrescriptionsByDoctor(@PathVariable Integer id){
        List<PrescriptionDto> prescriptionDtoList = prescriptionService.getPrescriptionsByDoctor(id);
        return ResponseEntity.ok(prescriptionDtoList);
    }

    @GetMapping("/findprescriptionsbypatient/{id}")
    public ResponseEntity<List<PrescriptionDto>> findPrescriptionsByPatient(@PathVariable Integer id){
        List<PrescriptionDto> prescriptionDtoList = prescriptionService.getPrescriptionsByPatient(id);
        return ResponseEntity.ok(prescriptionDtoList);
    }

}
