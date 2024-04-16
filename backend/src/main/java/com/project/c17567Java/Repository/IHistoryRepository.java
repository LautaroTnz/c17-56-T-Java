package com.project.c17567Java.Repository;

import com.project.c17567Java.Entity.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IHistoryRepository extends JpaRepository<History, Integer> {
    public List<History> findHistoriesByPatientId(Integer id);
    public List<History> findHistoriesByDoctorId(Integer id);
    public History findTopByPatientId(Integer id);
}
