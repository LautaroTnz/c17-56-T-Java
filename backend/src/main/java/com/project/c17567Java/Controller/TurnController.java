package com.project.c17567Java.Controller;

import com.project.c17567Java.Dto.TurnDto;
import com.project.c17567Java.Service.TurnService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/turn")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://mydoctorapp.vercel.app"})

public class TurnController {

    @Autowired
    TurnService turnService;

    @GetMapping("/find/{id}")
    public ResponseEntity<TurnDto> findById(@PathVariable Integer id){
        TurnDto turnDto = turnService.findTurnById(id);
        return ResponseEntity.ok(turnDto);
    }

    @PostMapping("/save")
    public ResponseEntity<TurnDto> saveTurn(@RequestBody TurnDto turnDto){
        turnService.saveTurn(turnDto);
        return ResponseEntity.ok(turnDto);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTurn(@PathVariable Integer id){
        turnService.deleteTurn(id);
        return ResponseEntity.ok("El turno ha sido Eliminado");
    }

   @GetMapping("/findall")
    public ResponseEntity<List<TurnDto>> findAll(){
        List<TurnDto> turnDtoList = turnService.getAllTurns();
        return ResponseEntity.ok(turnDtoList);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> editTurn(@PathVariable Integer id, @RequestBody TurnDto turnDto){
        turnService.editTurn(id, turnDto);
        return ResponseEntity.ok("El turno ha sido Actualizado");
    }

    @GetMapping("/findturnsbydoctor/{id}")
    public ResponseEntity<List<TurnDto>> findTurnsByDoctor(@PathVariable Integer id){
        List<TurnDto> turnDtoList = turnService.getTurnsByDoctor(id);
        return ResponseEntity.ok(turnDtoList);
    }

    @GetMapping("/findturnsbypatient/{id}")
    public ResponseEntity<List<TurnDto>> findTurnsByPatient(@PathVariable Integer id){
        List<TurnDto> turnDtoList = turnService.getTurnsByPatient(id);
        return ResponseEntity.ok(turnDtoList);
    }

}
