package com.alfonso.SpringConAngularDemo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alfonso.SpringConAngularDemo.modelo.Cliente;
import com.alfonso.SpringConAngularDemo.repository.ClienteRepository;

@Service
public class ClienteServiceJPA implements IClienteService {

	@Autowired
	ClienteRepository repoCliente;
	
	
	@Override
	@Transactional(readOnly = true)
	public List<Cliente> buscarTodos() {
		List<Cliente> lista= new ArrayList();
		lista= repoCliente.findAll();
		return lista;
	}


	@Override
	@Transactional
	public void borrar(Long id) {
		// TODO Auto-generated method stub
		repoCliente.deleteById(id);
	}


	@Override
	@Transactional(readOnly = true)
	public Cliente buscarPorId(Long id) {
		// TODO Auto-generated method stub
		return repoCliente.findById(id).orElse(null);
	}


	@Override
	@Transactional
	public Cliente guardar(Cliente cliente) {
		// TODO Auto-generated method stub
			return repoCliente.save(cliente);
	}


	@Override
	public Cliente modificar(Cliente cliente) {
		// TODO Auto-generated method stub
		return repoCliente.save(cliente);
	}


	

}
