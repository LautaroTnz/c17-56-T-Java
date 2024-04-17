package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.SpecialtyDto;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public interface ISpecialtyService {

    public List<SpecialtyDto> getSpecialties();

    public void saveSpecialty(SpecialtyDto specialtyDto);

    public  void editSpecialty(Integer id, SpecialtyDto specialtyDto);

    public void deleteSpecialty(Integer id);
    public SpecialtyDto getSpecialtyById(Integer id);
}
