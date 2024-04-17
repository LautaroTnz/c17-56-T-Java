package com.project.c17567Java.Repository;

import com.project.c17567Java.Entity.Turn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ITurnRepository extends JpaRepository<Turn, Integer> {

    @Query("SELECT t FROM Turn t WHERE t.doctor.id =: idDoctor")
    List<Turn> findTurnsByDoctor(Integer idDoctor);

    @Query("SELECT t FROM Turn t WHERE t.patient.id =: idPatient")
    List<Turn> findTurnsByPatient(Integer idPatient);

    @Query("SELECT t FROM Turn t WHERE t.doctor.id =: idDoctor AND t.date =: date")
    List<Turn> findTurnsByDoctorByDay(Integer idDoctor, LocalDate date);

    @Query("SELECT t FROM Turn t WHERE t.patient.id =: idPatient AND t.date =: date")
    List<Turn> findTurnsByPatientByDay(Integer idPatient, LocalDate date);

//    @Query("SELECT t FROM Turno t WHERE t.doctor.id =: idDoctor AND t.date BETWEEN :startDate AND :endDate")
//    List<Turn> findTurnsByDoctorByWeek(Integer idDoctor, LocalDate startDate, LocalDate endDate);
//
//    @Query("SELECT t FROM Turn t WHERE t.patient.id =: idPatient AND t.date BETWEEN :startDate AND :endDate")
//    List<Turn> findTurnsByPatientByWeek(Integer idPatient, LocalDate startDate, LocalDate endDate);

}
