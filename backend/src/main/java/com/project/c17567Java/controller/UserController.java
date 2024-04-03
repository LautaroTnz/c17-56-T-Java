package com.project.c17567Java.controller;

import com.project.c17567Java.model.Usuario;
import com.project.c17567Java.service.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    IUsuarioService iUsuarioService;

    @GetMapping("/findUser/")
    public List<Usuario> encontrarUsuario(){
        return iUsuarioService.getUsuarios();
    }
    @PostMapping("/crearUsuario")
    public String crearUsuario(@RequestBody Usuario usuario){
        iUsuarioService.saveUsuario(usuario);
        return "Usuario creado exitosamente";
    }
}
