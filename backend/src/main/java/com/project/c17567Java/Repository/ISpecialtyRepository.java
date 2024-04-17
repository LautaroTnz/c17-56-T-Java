package com.project.c17567Java.Repository;

import com.project.c17567Java.Entity.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISpecialtyRepository extends JpaRepository<Specialty, Integer> {
}
