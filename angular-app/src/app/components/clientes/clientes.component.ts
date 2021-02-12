import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Cliente } from './cliente';
import {CLIENTES} from './clientes.json';
import {ClienteService} from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes:Cliente[];
  constructor(private clienteService:ClienteService) {
    
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      //funcion anonima
      //observador, actualiza el listado de clientes 
      clientes => this.listaClientes = clientes
    );
  }

}
