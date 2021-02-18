package com.alfonso.SpringConAngularDemo.service;

import java.util.List;

import com.alfonso.SpringConAngularDemo.modelo.Cliente;

public interface IClienteService {
	List<Cliente> buscarTodos();
	void borrar(Long id);
	Cliente buscarPorId(Long id);
	Cliente guardar(Cliente cliente);
	Cliente modificar(Cliente cliente);
}
