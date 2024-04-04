package com.project.c17567Java.Service;

import com.project.c17567Java.Auth.Entity.User;

import java.util.List;

public interface IUserService {
    public void saveUsuario(User user);
    public void deleteUsuario(Long id);
    public User findUsuario(Long id);
    public void editUsuario(User user);
    public List<User> getUsuarios();
}
