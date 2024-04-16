package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.TurnDto;
import com.project.c17567Java.Entity.Turn;
import com.project.c17567Java.Repository.ITurnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TurnService implements ITurnService{

    @Autowired
    private ITurnRepository iTurnRepository;

    @Override
    public void saveTurn(TurnDto turnDto) {
        Turn turn = Turn.builder()
                .patient(turnDto.getPatient())
                .doctor(turnDto.getDoctor())
                .date(turnDto.getDate())
                .time(turnDto.getTime())
                .state(turnDto.getState())
                .build();

        iTurnRepository.save(turn);
    }

    @Override
    public void deleteTurn(Integer id) {
        iTurnRepository.deleteById(id);
    }

    @Override
    public List<TurnDto> getAllTurns() {
        List<TurnDto> turnDtoList = iTurnRepository.findAll()
                .stream()
                .map(turn -> TurnDto.builder()
                        .patient(turn.getPatient())
                        .doctor(turn.getDoctor())
                        .date(turn.getDate())
                        .time(turn.getTime())
                        .state(turn.getState())
                        .build())
                .toList();

        return turnDtoList;
    }

    @Override
    public TurnDto findTurnById(Integer id) {
        Turn turn = iTurnRepository.findById(id).orElse(null);

        TurnDto turnDto = TurnDto.builder()
                .patient(turn.getPatient())
                .doctor(turn.getDoctor())
                .date(turn.getDate())
                .time(turn.getTime())
                .state(turn.getState())
                .build();

        return turnDto;
    }

    @Override
    public List<TurnDto> getTurnsByDoctor(Integer id) {
        List<TurnDto> turnsDtoByDoctor = iTurnRepository.findTurnsByDoctor(id)
                .stream()
                .map(turn -> TurnDto.builder()
                        .patient(turn.getPatient())
                        .doctor(turn.getDoctor())
                        .date(turn.getDate())
                        .time(turn.getTime())
                        .state(turn.getState())
                        .build())
                .toList();

        return turnsDtoByDoctor;
    }

    @Override
    public List<TurnDto> getTurnsByDoctorByDay(Integer id, LocalDate date) {
        List<TurnDto> turnsDtoByDoctorByDay = iTurnRepository.findTurnsByDoctorByDay(id,date)
                .stream()
                .map(turn -> TurnDto.builder()
                        .patient(turn.getPatient())
                        .doctor(turn.getDoctor())
                        .date(turn.getDate())
                        .time(turn.getTime())
                        .state(turn.getState())
                        .build())
                .toList();

        return turnsDtoByDoctorByDay;
    }

//    @Override
//    public List<TurnDto> getTurnsByDoctorByWeek(Integer id, LocalDate startDate) {
//        LocalDate endDate = startDate.plusDays(7);
//
//        List<TurnDto> turnsDtoByDoctorByWeek = iTurnRepository.findTurnsByDoctorByWeek(id, startDate, endDate)
//                .stream()
//                .map(turn -> TurnDto.builder()
//                        .patient(turn.getPatient())
//                        .doctor(turn.getDoctor())
//                        .date(turn.getDate())
//                        .time(turn.getTime())
//                        .state(turn.getState())
//                        .build())
//                .toList();
//
//        return turnsDtoByDoctorByWeek;
//    }

    @Override
    public List<TurnDto> getTurnsByPatient(Integer id) {
        List<TurnDto> turnsDtoByPatient = iTurnRepository.findTurnsByPatient(id)
                .stream()
                .map(turn -> TurnDto.builder()
                        .patient(turn.getPatient())
                        .doctor(turn.getDoctor())
                        .date(turn.getDate())
                        .time(turn.getTime())
                        .state(turn.getState())
                        .build())
                .toList();

        return turnsDtoByPatient;
    }

    @Override
    public List<TurnDto> getTurnsByPatientByDay(Integer id, LocalDate date) {
        List<TurnDto> turnsDtoByPatientByDay = iTurnRepository.findTurnsByPatientByDay(id, date)
                .stream()
                .map(turn -> TurnDto.builder()
                        .patient(turn.getPatient())
                        .doctor(turn.getDoctor())
                        .date(turn.getDate())
                        .time(turn.getTime())
                        .state(turn.getState())
                        .build())
                .toList();

        return turnsDtoByPatientByDay;
    }

//    @Override
//    public List<TurnDto> getTurnsByPatientByWeek(Integer id, LocalDate startDate) {
//        LocalDate endDate = startDate.plusDays(7);
//
//        List<TurnDto> turnsDtoByPatientByWeek = iTurnRepository.findTurnsByPatientByWeek(id, startDate, endDate)
//                .stream()
//                .map(turn -> TurnDto.builder()
//                        .patient(turn.getPatient())
//                        .doctor(turn.getDoctor())
//                        .date(turn.getDate())
//                        .time(turn.getTime())
//                        .state(turn.getState())
//                        .build())
//                .toList();
//
//        return turnsDtoByPatientByWeek;
//    }

    @Override
    public void editTurn(Integer id, TurnDto turnDto) {
        Optional<Turn> turnOptional = iTurnRepository.findById(id);

        if (turnOptional.isPresent()) {
            Turn turn = turnOptional.get();

            turn.setPatient(turnDto.getPatient());
            turn.setDoctor(turnDto.getDoctor());
            turn.setDate(turnDto.getDate());
            turn.setTime(turnDto.getTime());
            turn.setState(turnDto.getState());

            iTurnRepository.save(turn);
        }
    }
}
