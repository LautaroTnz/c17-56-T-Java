package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.ReceptionistDTO;
import com.project.c17567Java.Entity.Receptionist;
import com.project.c17567Java.Repository.IReceptionistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import  java.util.List;

@Service
public class ReceptionistService implements IReceptionistService{

    @Autowired
    private IReceptionistRepository iReceptionistRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void saveReceptionist(ReceptionistDTO receptionistDTO){
        Receptionist receptionist = new Receptionist();
        receptionist.setId(receptionistDTO.getId());
        receptionist.setUsername(receptionistDTO.getUsername());
        receptionist.setPassword(passwordEncoder.encode(receptionistDTO.getPassword()));
        receptionist.setEmail(receptionistDTO.getEmail());
        receptionist.setFirstname(receptionistDTO.getFirstname());
        receptionist.setLastname(receptionistDTO.getLastname());
        receptionist.setCountry(receptionistDTO.getCountry());
        receptionist.setDni(receptionistDTO.getDni());
        receptionist.setRole(receptionistDTO.getRole());
        receptionist.setReceptionistId(receptionistDTO.getReceptionistId());
        iReceptionistRepository.save(receptionist);

    }
    @Override
    public ReceptionistDTO getReceptionistById(Integer id){
        Receptionist receptionist =iReceptionistRepository.findById(id).orElse(null);


          ReceptionistDTO receptionistDto =ReceptionistDTO.builder()
                  .id(receptionist.getId())
                  .username(receptionist.getUsername())
                  .email(receptionist.getEmail())
                  .firstname(receptionist.getFirstname())
                  .lastname(receptionist.getLastname())
                  .country(receptionist.getCountry())
                  .dni(receptionist.getDni())
                  .role(receptionist.getRole())
                  .receptionistId(receptionist.getReceptionistId())
                  .build();

        return receptionistDto;
    }
    @Override
    public void deleteReceptionist(Integer id){
        iReceptionistRepository.deleteById(id);
    }

    @Override
    public List<ReceptionistDTO> getAllReceptionists(){

        List<ReceptionistDTO> receptionistDTO=iReceptionistRepository.findAll()
                .stream()
                .map(receptionist -> ReceptionistDTO.builder()
                        .id(receptionist.getId())
                        .username(receptionist.getUsername())
                        .email(receptionist.getEmail())
                        .firstname(receptionist.getFirstname())
                        .lastname(receptionist.getLastname())
                        .dni(receptionist.getDni())
                        .country(receptionist.getCountry())
                        .role(receptionist.getRole())
                        .receptionistId(receptionist.getReceptionistId())
                        .build())
                .toList();

        return receptionistDTO;
    }
    @Override
    public void editReceptionist(Integer id, ReceptionistDTO receptionistDTO){
       Receptionist receptionist=iReceptionistRepository.findById(id).orElse(null);

        if (receptionist!=null){
          receptionist.setLastname(receptionistDTO.getLastname());
          receptionist.setFirstname(receptionistDTO.getFirstname());
          receptionist.setCountry(receptionistDTO.getCountry());
          iReceptionistRepository.save(receptionist);
        }


    }
}
