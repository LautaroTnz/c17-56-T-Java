package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.SpecialtyDto;
import com.project.c17567Java.Entity.Specialty;
import com.project.c17567Java.Repository.ISpecialtyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecialtyService implements ISpecialtyService{
    @Autowired
    private ISpecialtyRepository iSpecialtyRepository;


    public void saveSpecialty(SpecialtyDto specialtyDto){
        Specialty specialty=new Specialty();
        specialty.setId(specialtyDto.getSpecialityId());
        specialty.setDescription(specialtyDto.getDescription());
        iSpecialtyRepository.save(specialty);

    }
    @Override
    public List<SpecialtyDto> getSpecialties() {
        List<SpecialtyDto>  specialtyDtoList = iSpecialtyRepository.findAll()
                .stream()
                .map(specialties-> SpecialtyDto.builder()
                        .specialityId(specialties.getId())
                        .description(specialties.getDescription())
                        .build())
                .toList();

        return specialtyDtoList;
    }

    @Override
    public  void editSpecialty(Integer id, SpecialtyDto specialtyDto){
        Specialty specialty=iSpecialtyRepository.findById(id).orElse(null);
        if(specialty!=null){
            specialty.setId(specialtyDto.getSpecialityId());
            specialty.setDescription(specialtyDto.getDescription());
            iSpecialtyRepository.save(specialty);
        }

    }


    @Override
    public void deleteSpecialty(Integer id){
        iSpecialtyRepository.deleteById(id);
    }




    @Override
    public SpecialtyDto getSpecialtyById(Integer id){
        Specialty specialty=iSpecialtyRepository.findById(id).orElse(null);

        SpecialtyDto specialtyDto= SpecialtyDto.builder()
                .specialityId(specialty.getId())
                .description(specialty.getDescription())
                .build();

        return specialtyDto;
    }
}
