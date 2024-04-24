package com.project.c17567Java.Controller;

import com.project.c17567Java.Dto.DoctorDto;
import com.project.c17567Java.Service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctor")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://mydoctorapp.vercel.app"})
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/find/{id}")
    public ResponseEntity<DoctorDto> findById(@PathVariable Integer id){
        DoctorDto doctorDto = doctorService.findDoctorById(id);
        return ResponseEntity.ok(doctorDto);
    }

    @PostMapping("/save")
    public ResponseEntity<DoctorDto> saveDoctor(@RequestBody DoctorDto doctorDto){
        doctorService.saveDoctor(doctorDto);
        return ResponseEntity.ok(doctorDto);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteDoctor(@PathVariable Integer id){
        doctorService.deleteDoctor(id);
        return ResponseEntity.ok("El doctor ha sido Eliminado");
    }

    @GetMapping("/findall")
    public ResponseEntity<List<DoctorDto>> findAll(){
        List<DoctorDto> doctorDtoList = doctorService.getDoctors();
        return ResponseEntity.ok(doctorDtoList);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> editDoctor(@PathVariable Integer id, @RequestBody DoctorDto doctorDto){
        doctorService.editDoctor(id, doctorDto);
        return ResponseEntity.ok("El doctor ha sido Actualizado");
    }
}
