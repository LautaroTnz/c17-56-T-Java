package com.project.c17567Java.Controller;

import com.project.c17567Java.Dto.HistoryDto;
import com.project.c17567Java.Service.HistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/history")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://mydoctorapp.vercel.app"})
public class HistoryController {
    @Autowired
    private HistoryService historyService;

    @GetMapping("/findall/{id}")
    public ResponseEntity<List<HistoryDto>> findByPatienId(@PathVariable Integer id){
        List<HistoryDto> historyDto = historyService.getHistoryByPatient(id);
        return ResponseEntity.ok(historyDto);
    }
    @GetMapping("/findlast/{id}")
    public ResponseEntity<HistoryDto> findLastPatientHistory(@PathVariable Integer id){
        HistoryDto historyDto = historyService.getLastPatientHistory(id);
        return ResponseEntity.ok(historyDto);
    }
    @GetMapping("/findbydoctor/{id}")
    public ResponseEntity<List<HistoryDto>> findHistoriesByDoctor(@PathVariable Integer id){
        List<HistoryDto> historyDtoList = historyService.getHistoriesByDoctor(id);
        return ResponseEntity.ok(historyDtoList);
    }
    @PostMapping("/save")
    public ResponseEntity<HistoryDto> saveHistory(@RequestBody HistoryDto historyDto){
        historyService.saveHistory(historyDto);
        return ResponseEntity.ok(historyDto);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> editHistory(@PathVariable Integer id,
                                         @RequestBody HistoryDto historyDto){
        historyService.editHistory(id, historyDto);
        return ResponseEntity.ok("");
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteHistory(@PathVariable Integer id){
        historyService.deleteHistory(id);
        return ResponseEntity.ok("");
    }
}
