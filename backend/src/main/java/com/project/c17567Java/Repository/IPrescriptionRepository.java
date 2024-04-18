package com.project.c17567Java.Repository;

import com.project.c17567Java.Entity.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPrescriptionRepository extends JpaRepository<Prescription, Integer> {
    List<Prescription> findPrescriptionsByDoctorId(Integer id);

    List<Prescription> findPrescriptionsByPatientId(Integer id);
}