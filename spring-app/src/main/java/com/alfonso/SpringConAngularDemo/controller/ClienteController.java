package com.alfonso.SpringConAngularDemo.controller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.PrePersist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.alfonso.SpringConAngularDemo.modelo.Cliente;
import com.alfonso.SpringConAngularDemo.service.IClienteService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {
	
	@Autowired
	IClienteService clienteService;
	
	@GetMapping("/clientes")
	@ResponseStatus(HttpStatus.OK)
	public List<Cliente> buscarTodos() {
		List<Cliente> lista= new ArrayList();
		lista= clienteService.buscarTodos();
		return lista;
	}
	
	@GetMapping("/clientes/{id}")
	@ResponseStatus(HttpStatus.OK)
	public Cliente buscarPorId(@PathVariable Long id) {
		Cliente cliente= new Cliente();
		cliente= clienteService.buscarPorId(id);
		return cliente;
	}
	
	@DeleteMapping("/clientes/{id}")
	@ResponseStatus(HttpStatus.OK)
	public void borrar(@PathVariable Long id) {
		clienteService.borrar(id);
	}
	
	@PostMapping("/clientes")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente guardar(@RequestBody Cliente cliente) {
		Cliente clienteGuardar= new Cliente();
		clienteGuardar=clienteService.guardar(cliente);
		return clienteGuardar;
	}
	
	@PutMapping("/clientes")
	@ResponseStatus(HttpStatus.OK)
	public Cliente modificar(@RequestBody Cliente cliente) {
		Cliente clienteModificar= new Cliente();
		clienteModificar= clienteService.modificar(cliente);
		return clienteModificar;
	}
	
}
