package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.TurnDto;
import com.project.c17567Java.Entity.Doctor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface ITurnService {

    public void saveTurn(TurnDto turnDto);
    public void deleteTurn(Integer id);
    public List<TurnDto> getAllTurns();
    public TurnDto findTurnById(Integer id);
    public List<TurnDto> getTurnsByDoctor(Integer idDoctor);

    public List<TurnDto> getTurnsByPatient(Integer idPatient);

    public void editTurn(Integer id, TurnDto turnDto);
}
