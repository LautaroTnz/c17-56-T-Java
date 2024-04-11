package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.ReceptionistDTO;
import com.project.c17567Java.Entity.Receptionist;
import com.project.c17567Java.Repository.IReceptionistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import  java.util.List;

@Service
public class ReceptionistService implements IReceptionistService{

    @Autowired
    private IReceptionistRepository iReceptionistRepository;
    @Override
    public void saveReceptionist(ReceptionistDTO receptionistDTO){
        Receptionist receptionist = new Receptionist();
        receptionist.setUsername(receptionistDTO.getUsername());
        receptionist.setPassword(receptionistDTO.getPassword());
        receptionist.setEmail(receptionistDTO.getEmail());
        receptionist.setFirstname(receptionistDTO.getFirstname());
        receptionist.setLastname(receptionistDTO.getLastname());
        receptionist.setCountry(receptionistDTO.getCountry());
        receptionist.setDni(receptionistDTO.getDni());
        receptionist.setRole(receptionistDTO.getRole());
        receptionist.setId(receptionistDTO.getId());
        iReceptionistRepository.save(receptionist);

    }

    public ReceptionistDTO getReceptionistById(Integer id){
        Receptionist receptionist =iReceptionistRepository.findById(id).orElse(null);


          ReceptionistDTO receptionistDto =ReceptionistDTO.builder()
                  .username(receptionist.getUsername())
                  .password(receptionist.getPassword())
                  .email(receptionist.getEmail())
                  .firstname(receptionist.getFirstname())
                  .lastname(receptionist.getLastname())
                  .country(receptionist.getCountry())
                  .dni(receptionist.getDni())
                  .role(receptionist.getRole())
                  .id(receptionist.getId())
                  .build();

        return receptionistDto;
    }
    public void deleteReceptionist(Integer id){
        iReceptionistRepository.deleteById(id);
    }


    public List<ReceptionistDTO> getAllReceptionists(){

        List<ReceptionistDTO> receptionistDTO=iReceptionistRepository.findAll()
                .stream()
                .map(receptionist -> ReceptionistDTO.builder()
                        .username(receptionist.getUsername())
                        .password(receptionist.getPassword())
                        .firstname(receptionist.getFirstname())
                        .dni(receptionist.getDni())
                        .country(receptionist.getCountry())
                        .role(receptionist.getRole())
                        .receptionistId(receptionist.getReceptionistId())
                        .build())
                .toList();

        return receptionistDTO;
    }

    public void editReceptionist(Integer id){
       Receptionist receptionist=iReceptionistRepository.findById(id).orElse(null);

        if (receptionist!=null){
          receptionist.setLastname(receptionist.getLastname());
          receptionist.setFirstname(receptionist.getFirstname());
          receptionist.setCountry(receptionist.getCountry());
          iReceptionistRepository.save(receptionist);
        }


    }
}
