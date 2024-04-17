package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.HistoryDto;

import java.util.List;

public interface IHistoryService {
    public void saveHistory(HistoryDto historyDto);
    public void deletePatient(Integer id);
    public List<HistoryDto> getHistoryByPatient(Integer id);
    public void editHistory(Integer id, HistoryDto historyDto);
    public void deleteHistory(Integer id);
    public HistoryDto getLastPatientHistory(Integer id);
    public List<HistoryDto> getHistoriesByDoctor(Integer id);
}
