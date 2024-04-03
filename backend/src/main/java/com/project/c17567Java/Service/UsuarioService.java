package com.project.c17567Java.Service;

import com.project.c17567Java.Entity.Usuario;
import com.project.c17567Java.Repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService implements IUsuarioService {
    @Autowired
    IUsuarioRepository iUsuarioRepository;
    @Override
    public void saveUsuario(Usuario usuario) {
        iUsuarioRepository.save(usuario);
    }

    @Override
    public void deleteUsuario(Long id) {
        iUsuarioRepository.deleteById(id);
    }

    @Override
    public Usuario findUsuario(Long id) {
        Usuario usuario = iUsuarioRepository.findById(id).orElse(null);
        return usuario;
    }

    @Override
    public void editUsuario(Usuario usuario) {

    }

    @Override
    public List<Usuario> getUsuarios() {
        return iUsuarioRepository.findAll();
    }
}
