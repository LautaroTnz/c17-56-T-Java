package com.project.c17567Java.Entity;

import com.project.c17567Java.user.Rol;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String email;
    private String nombre;
    private String apellido;
    private Long dni;
    @Enumerated(EnumType.STRING)
    private Rol rol;
}
