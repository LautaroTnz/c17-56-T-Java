package com.project.c17567Java.Controller;

import com.project.c17567Java.Dto.ReceptionistDTO;
import com.project.c17567Java.Service.ReceptionistService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/receptionist")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://mydoctorapp.vercel.app"})

public class ReceptionistController {
    @Autowired
    private  ReceptionistService receptionistService;

    @PostMapping("/save")
    public ResponseEntity<ReceptionistDTO> saveReceptionist(@RequestBody ReceptionistDTO receptionistDTO ){
        receptionistService.saveReceptionist(receptionistDTO);
        return ResponseEntity.ok(receptionistDTO);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<ReceptionistDTO> getById(@PathVariable Integer id){
        ReceptionistDTO receptionistDTO=receptionistService.getReceptionistById(id);
        if(receptionistDTO!= null){
            return ResponseEntity.ok(receptionistDTO);
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteReceptionist(@PathVariable Integer id){
       receptionistService.deleteReceptionist(id);
       return ResponseEntity.ok("Recepcionista eliminado con exito");
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> editReceptionist(@PathVariable Integer id, @RequestBody ReceptionistDTO receptionistDTO){
        receptionistService.editReceptionist(id, receptionistDTO);
        return ResponseEntity.ok("recepcionista editado con exito");
    }

    @GetMapping("/findall")
    public ResponseEntity<List<ReceptionistDTO>> getAllReceptionist(){
        List<ReceptionistDTO> receptionisList= receptionistService.getAllReceptionists();
    return ResponseEntity.ok(receptionisList);
    }


}
