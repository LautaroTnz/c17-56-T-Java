package com.project.c17567Java.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Specialty extends Doctor{

    @Column(nullable = false)
    @OneToMany(mappedBy="specialityId")
    private String specialityId;
    @Column(nullable = false)
    private String description;

}
