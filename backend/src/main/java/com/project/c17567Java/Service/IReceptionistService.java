package com.project.c17567Java.Service;

import com.project.c17567Java.Dto.ReceptionistDTO;
import com.project.c17567Java.Entity.Receptionist;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


public interface IReceptionistService {

    public void saveReceptionist(ReceptionistDTO receptionistDTO);

    public ReceptionistDTO getReceptionistById(Integer id);

    public void deleteReceptionist(Integer id);

    public List<ReceptionistDTO> getAllReceptionists();
    public void editReceptionist(Integer id, ReceptionistDTO receptionistDTO);

}
