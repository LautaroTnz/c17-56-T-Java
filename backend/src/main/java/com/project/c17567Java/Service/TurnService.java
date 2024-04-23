package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.TurnDto;
import com.project.c17567Java.Entity.Doctor;
import com.project.c17567Java.Entity.Patient;
import com.project.c17567Java.Entity.Turn;
import com.project.c17567Java.Repository.IDoctorRepository;
import com.project.c17567Java.Repository.IPatientRepository;
import com.project.c17567Java.Repository.ITurnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TurnService implements ITurnService{

    @Autowired
    private ITurnRepository iTurnRepository;

    @Autowired
    private IDoctorRepository iDoctorRepository;

    @Autowired
    private IPatientRepository iPatientRepository;


    @Override
    public void saveTurn(TurnDto turnDto) {
        Optional<Patient> patientOptional = iPatientRepository.findById(turnDto.getPatient());
        Optional<Doctor> doctorOptional = iDoctorRepository.findById(turnDto.getDoctor());

        if (patientOptional.isPresent() && doctorOptional.isPresent()) {

            LocalDateTime selectedDateTime = LocalDateTime.of(turnDto.getDate(), turnDto.getTime());


            LocalDateTime startDateTime = selectedDateTime;
            LocalDateTime endDateTime = selectedDateTime.plusHours(1);


            turnDto.setStart(startDateTime);
            turnDto.setEnd(endDateTime);


            Turn turn = Turn.builder()
                    .id(turnDto.getId())
                    .patient(patientOptional.get())
                    .doctor(doctorOptional.get())
                    .date(turnDto.getDate())
                    .time(turnDto.getTime())
                    .state(turnDto.getState())
                    .title(turnDto.getTitle())
                    .description(turnDto.getDescription())
                    .start(turnDto.getStart())
                    .end(turnDto.getEnd())
                    .build();


            iTurnRepository.save(turn);
        } else {
            throw new RuntimeException("No se encontró el paciente o el doctor correspondiente");
        }
    }


    @Override
    public void deleteTurn(Integer id) {
       iTurnRepository.deleteById(id);
    }

    @Override
    public List<TurnDto> getAllTurns() {
        List<TurnDto> turnDtoList = iTurnRepository.findAll()
                .stream()
                .map(turn -> {
                    TurnDto turnDto = TurnDto.builder()
                            .id(turn.getId())
                            .patient(turn.getPatient().getId())
                            .doctor(turn.getDoctor().getId())
                            .date(turn.getDate())
                            .time(turn.getTime())
                            .state(turn.getState())
                            .title(turn.getTitle())
                            .description(turn.getDescription())
                            .start(calculateStartDateTime(turn.getDate(), turn.getTime()))
                            .end(calculateEndDateTime(turn.getDate(), turn.getTime()))
                            .build();
                    return turnDto;
                })
                .collect(Collectors.toList());

        return turnDtoList;
    }

    private LocalDateTime calculateStartDateTime(LocalDate date, LocalTime time) {
        return LocalDateTime.of(date, time);
    }

    private LocalDateTime calculateEndDateTime(LocalDate date, LocalTime time) {
        return LocalDateTime.of(date, time).plusHours(1);
    }

    @Override
    public TurnDto findTurnById(Integer id) {
        Turn turn = iTurnRepository.findById(id).orElse(null);

        TurnDto turnDto = TurnDto.builder()
                .id(turn.getId())
                .patient(turn.getPatient().getId())
                .doctor(turn.getDoctor().getId())
                .date(turn.getDate())
                .time(turn.getTime())
                .state(turn.getState())
                .title(turn.getTitle())
                .description(turn.getDescription())
                .start(calculateStartDateTime(turn.getDate(), turn.getTime()))
                .end(calculateEndDateTime(turn.getDate(), turn.getTime()))
                .build();

        return turnDto;
    }

    @Override
    public List<TurnDto> getTurnsByDoctor(Integer idDoctor) {
        List<TurnDto> turnsDtoByDoctor = iTurnRepository.findByDoctorId(idDoctor)
                .stream()
                .map(turn -> TurnDto.builder()
                        .id(turn.getId())
                        .patient(turn.getPatient().getId())
                        .doctor(turn.getDoctor().getId())
                        .date(turn.getDate())
                        .time(turn.getTime())
                        .state(turn.getState())
                        .title(turn.getTitle())
                        .description(turn.getDescription())
                        .start(calculateStartDateTime(turn.getDate(), turn.getTime()))
                        .end(calculateEndDateTime(turn.getDate(), turn.getTime()))
                        .build())
                .toList();

        return turnsDtoByDoctor;
    }

    @Override
    public List<TurnDto> getTurnsByPatient(Integer id) {
        List<TurnDto> turnsDtoByPatient = iTurnRepository.findByPatient(id)
                .stream()
                .map(turn -> TurnDto.builder()
                        .id(turn.getId())
                        .patient(turn.getPatient().getId())
                        .doctor(turn.getDoctor().getId())
                        .date(turn.getDate())
                        .time(turn.getTime())
                        .state(turn.getState())
                        .title(turn.getTitle())
                        .description(turn.getDescription())
                        .start(calculateStartDateTime(turn.getDate(), turn.getTime()))
                        .end(calculateEndDateTime(turn.getDate(), turn.getTime()))

                        .build())
                .toList();

        return turnsDtoByPatient;
    }


    @Override
    public void editTurn(Integer id, TurnDto turnDto) {
        Optional<Turn> turnOptional = iTurnRepository.findById(id);

        if (turnOptional.isPresent()) {
            Turn turn = turnOptional.get();

            Optional<Patient> patientOptional = iPatientRepository.findById(turnDto.getPatient());
            Optional<Doctor> doctorOptional = iDoctorRepository.findById(turnDto.getDoctor());

            if (patientOptional.isPresent() && doctorOptional.isPresent()) {

                turn.setPatient(patientOptional.get());
                turn.setDoctor(doctorOptional.get());
                turn.setDate(turnDto.getDate());
                turn.setTime(turnDto.getTime());
                turn.setState(turnDto.getState());

                iTurnRepository.save(turn);
            } else {
                throw new RuntimeException("No se encontró el paciente o el doctor correspondiente");

            }
        }
    }
}
