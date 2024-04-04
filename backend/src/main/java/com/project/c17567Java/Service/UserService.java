package com.project.c17567Java.Service;

import com.project.c17567Java.Auth.Entity.User;
import com.project.c17567Java.Auth.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    @Autowired
    UserRepository userRepository;
    @Override
    public void saveUsuario(User user) {
        userRepository.save(user);
    }

    @Override
    public void deleteUsuario(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public User findUsuario(Long id) {
        User user = userRepository.findById(id).orElse(null);
        return user;
    }

    @Override
    public void editUsuario(User user) {

    }

    @Override
    public List<User> getUsuarios() {
        return userRepository.findAll();
    }
}
