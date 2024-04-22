package com.project.c17567Java.Repository;

import com.project.c17567Java.Entity.Doctor;
import com.project.c17567Java.Entity.Turn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ITurnRepository extends JpaRepository<Turn, Integer> {

    @Query("SELECT t FROM Turn t WHERE t.doctor.id = :doctorId")
    List<Turn> findByDoctorId(@Param("doctorId") Integer doctorId);

    @Query("SELECT t FROM Turn t WHERE t.patient.id = :patientId")
    List<Turn> findByPatient(@Param("patientId") Integer patientId);


}
