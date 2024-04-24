package com.project.c17567Java.Controller;

import com.project.c17567Java.Dto.DoctorDto;
import com.project.c17567Java.Dto.PatientDto;
import com.project.c17567Java.Service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patient")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://mydoctorapp.vercel.app"})
public class PatientController {

    private final PatientService patientService;

    @PostMapping("/save")
    public ResponseEntity<PatientDto> savePatient(@RequestBody PatientDto patientDto){
        patientService.savePatient(patientDto);
        return ResponseEntity.ok(patientDto);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePatient(@PathVariable Integer id){
        patientService.deletePatient(id);
        return ResponseEntity.ok("El paciente id" + id + "se ha eliminado");
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> editPatient(@PathVariable Integer id, @RequestBody PatientDto patientDto){
        patientService.editPatient(id, patientDto);
        return ResponseEntity.ok("El paciente" + id + "se ha actualizado");
    }

    @GetMapping("/findall")
    public ResponseEntity<List<PatientDto>> findAll(){
        List<PatientDto> patientDtoList = patientService.getPatients();
        return ResponseEntity.ok(patientDtoList);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<PatientDto> findById(@PathVariable Integer id){
        PatientDto patientDto = patientService.findPatientById(id);
        return ResponseEntity.ok(patientDto);
    }
}
