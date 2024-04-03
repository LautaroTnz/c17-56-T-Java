package com.project.c17567Java.Service;

import com.project.c17567Java.Entity.Usuario;

import java.util.List;

public interface IUsuarioService {
    public void saveUsuario(Usuario usuario);
    public void deleteUsuario(Long id);
    public Usuario findUsuario(Long id);
    public void editUsuario(Usuario usuario);
    public List<Usuario> getUsuarios();
}
