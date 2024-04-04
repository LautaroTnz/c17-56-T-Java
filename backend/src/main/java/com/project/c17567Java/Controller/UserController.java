package com.project.c17567Java.Controller;

import com.project.c17567Java.Auth.Entity.User;
import com.project.c17567Java.Service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    IUserService iUserService;

    @GetMapping("/findUser/")
    public List<User> encontrarUsuario(){
        return iUserService.getUsuarios();
    }
    @PostMapping("/crearUsuario")
    public String crearUsuario(@RequestBody User user){
        iUserService.saveUsuario(user);
        return "Usuario creado exitosamente";
    }
}
