package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.HistoryDto;
import com.project.c17567Java.Entity.History;
import com.project.c17567Java.Repository.IHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class HistoryService implements IHistoryService{
    @Autowired
    private IHistoryRepository iHistoryRepository;


    @Override
    public void saveHistory(HistoryDto historyDto) {
        History history = new History();
        history.setDate(LocalDate.now());
        history.setDescription(historyDto.getDescription());
        history.setDoctor(historyDto.getDoctor());
        history.setPatient(historyDto.getPatient());

        iHistoryRepository.save(history);
    }

    @Override
    public void deletePatient(Integer id) {
        iHistoryRepository.deleteById(id);
    }

    @Override
    public List<HistoryDto> getHistoryByPatient(Integer id) {

        List<HistoryDto> patientHistory = iHistoryRepository.findHistoriesByPatientId(id)
                .stream()
                .map(history -> HistoryDto.builder()
                        .description(history.getDescription())
                        .date(history.getDate())
                        .patient(history.getPatient())
                        .doctor(history.getDoctor())
                        .build())
                .toList();

        return patientHistory;
    }

    @Override
    public void editHistory(Integer id, HistoryDto historyDto) {
        Optional<History> historyOptional = iHistoryRepository.findById(id);

        if (historyOptional.isPresent()){
            History history = historyOptional.get();

            history.setDescription(historyDto.getDescription());
            history.setDate(historyDto.getDate());
            history.setDoctor(historyDto.getDoctor());
            history.setPatient(historyDto.getPatient());

            iHistoryRepository.save(history);
        }
    }
    @Override
    public void deleteHistory(Integer id) {
        iHistoryRepository.deleteById(id);
    }

    @Override
    public HistoryDto getLastPatientHistory(Integer id) {
        History history = iHistoryRepository.findTopByPatientId(id);

        HistoryDto historyDto = HistoryDto.builder()
                .patient(history.getPatient())
                .doctor(history.getDoctor())
                .description(history.getDescription())
                .date(history.getDate())
                .build();

        return historyDto;
    }

    @Override
    public List<HistoryDto> getHistoriesByDoctor(Integer id) {
        List<HistoryDto> historyDtoList = iHistoryRepository.findHistoriesByDoctorId(id)
                .stream()
                .map(history -> HistoryDto.builder()
                        .patient(history.getPatient())
                        .doctor(history.getDoctor())
                        .date(history.getDate())
                        .description(history.getDescription())
                        .build())
                .toList();

        return historyDtoList;
    }
}
