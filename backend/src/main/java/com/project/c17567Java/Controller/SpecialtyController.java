package com.project.c17567Java.Controller;

import com.project.c17567Java.Dto.SpecialtyDto;
import com.project.c17567Java.Service.SpecialtyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/specialty")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://mydoctorapp.vercel.app"})

public class SpecialtyController {
    @Autowired
    private SpecialtyService specialtyService;

    @PostMapping("/save")
    public ResponseEntity<SpecialtyDto> saveSpecialty(@RequestBody SpecialtyDto specialtyDto){
        specialtyService.saveSpecialty(specialtyDto);
        return ResponseEntity.ok(specialtyDto);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSpecialty(@PathVariable Integer id){
        specialtyService.deleteSpecialty(id);
        return ResponseEntity.ok("Especialidad eliminada ");
    }

    @PutMapping("/update/{id}")
    public  ResponseEntity<?> editSpecialty(@PathVariable Integer id, SpecialtyDto specialtyDto){
        specialtyService.editSpecialty(id,specialtyDto);
        return ResponseEntity.ok("Especialidad actualizada ");
    }

    @GetMapping("/findall")
    public ResponseEntity<List<SpecialtyDto>> findAllSpecialties(){
        List<SpecialtyDto> specialtyDtoList=specialtyService.getSpecialties();
        return ResponseEntity.ok(specialtyDtoList);
    }


    @GetMapping("/find/{id}")
    public ResponseEntity<SpecialtyDto> findSpecialtyById(@PathVariable Integer id){
       SpecialtyDto specialtyDto= specialtyService.getSpecialtyById(id);
        return  ResponseEntity.ok(specialtyDto);
    }
}
