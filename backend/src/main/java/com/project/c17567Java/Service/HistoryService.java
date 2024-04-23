package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.HistoryDto;
import com.project.c17567Java.Entity.Doctor;
import com.project.c17567Java.Entity.History;
import com.project.c17567Java.Entity.Patient;
import com.project.c17567Java.Repository.IDoctorRepository;
import com.project.c17567Java.Repository.IHistoryRepository;
import com.project.c17567Java.Repository.IPatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class HistoryService implements IHistoryService{
    @Autowired
    private IHistoryRepository iHistoryRepository;
    @Autowired
    private IDoctorRepository iDoctorRepository;
    @Autowired
    private IPatientRepository iPatientRepository;


    @Override
    public void saveHistory(HistoryDto historyDto) {
        Optional<Patient> patientOptional = iPatientRepository.findById(historyDto.getPatient());
        Optional<Doctor> doctorOptional = iDoctorRepository.findById(historyDto.getDoctor());

        History history = History.builder()
                .patient(patientOptional.get())
                .doctor(doctorOptional.get())
                .description(historyDto.getDescription())
                .date(historyDto.getDate())
                .build();

        iHistoryRepository.save(history);
    }

    @Override
    public void deletePatient(Integer id) {
        iHistoryRepository.deleteById(id);
    }

    @Override
    public List<HistoryDto> getHistoryByPatient(Integer id) {
        Optional<Patient> patientOptional = iPatientRepository.findById(id);

        List<HistoryDto> patientHistory = iHistoryRepository.findHistoriesByPatientId(id)
                .stream()
                .map(history -> HistoryDto.builder()
                        .description(history.getDescription())
                        .date(history.getDate())
                        .patient(patientOptional.get().getId())
                        .doctor(history.getDoctor().getId())
                        .id(history.getId_history())
                        .build())
                .toList();

        return patientHistory;
    }

    @Override
    public void editHistory(Integer id, HistoryDto historyDto) {
        Optional<History> historyOptional = iHistoryRepository.findById(id);
        Optional<Patient> patientOptional = iPatientRepository.findById(historyDto.getPatient());
        Optional<Doctor> doctorOptional = iDoctorRepository.findById(historyDto.getDoctor());

        if (historyOptional.isPresent()){

            History history = History.builder()
                    .id_history(historyDto.getId())
                    .patient(patientOptional.get())
                    .doctor(doctorOptional.get())
                    .description(historyDto.getDescription())
                    .date(historyDto.getDate())
                    .build();

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
                .patient(history.getPatient().getId())
                .id(history.getId_history())
                .doctor(history.getDoctor().getId())
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
                        .patient(history.getPatient().getId())
                        .doctor(history.getDoctor().getId())
                        .date(history.getDate())
                        .id(history.getId_history())
                        .description(history.getDescription())
                        .build())
                .toList();

        return historyDtoList;
    }
}
