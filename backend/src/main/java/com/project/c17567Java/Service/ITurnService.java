package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.TurnDto;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface ITurnService {

    public void saveTurn(TurnDto turnDto);
    public void deleteTurn(Integer id);
    public List<TurnDto> getAllTurns();
    public TurnDto findTurnById(Integer id);
    public List<TurnDto> getTurnsByDoctor(Integer id);
    public List<TurnDto> getTurnsByDoctorByDay(Integer id, LocalDate date);
//    public List<TurnDto> getTurnsByDoctorByWeek(Integer id, LocalDate starDate);
    public List<TurnDto> getTurnsByPatient(Integer id);
    public List<TurnDto> getTurnsByPatientByDay(Integer id, LocalDate date);
//    public List<TurnDto> getTurnsByPatientByWeek(Integer id, LocalDate starDate);
    public void editTurn(Integer id, TurnDto turnDto);
}
