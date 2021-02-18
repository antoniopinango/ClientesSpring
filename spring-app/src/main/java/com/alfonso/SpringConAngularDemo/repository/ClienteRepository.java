package com.alfonso.SpringConAngularDemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alfonso.SpringConAngularDemo.modelo.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Long> {
	

}
