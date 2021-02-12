import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import{ Router, ActivatedRoute } from '@angular/router'
import{ ClienteService } from '../cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  cliente:Cliente=new Cliente();
  titulo:string='Crear Clientes';


  constructor(private router:Router,private clienteService:ClienteService, private actRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.cargarCliente();
  }

  update():void{
    this.clienteService.update(this.cliente).subscribe(
      cliente =>{
        this.router.navigate(['/clientes'])
        swal.fire('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con exito!`, 'success')
      }
    )

  }

  crear():void{
    this.clienteService.createCliente(this.cliente)
      .subscribe(
        response => {
          this.router.navigate(['/clientes'])
          swal.fire('Nuevo Cliente', `Cliente ${this.cliente.nombre} fue creado con exito`, 'success')
        }
      )
  }
  cargarCliente(): void{
    //Obtiene el formulario
    this.actRoute.params.subscribe(
      id => {
        let idC = id['id'];
        if(idC){
          this.clienteService.getCliente(idC).subscribe(
            cliente => this.cliente = cliente
          )
        }
      }
    )
  }


}
