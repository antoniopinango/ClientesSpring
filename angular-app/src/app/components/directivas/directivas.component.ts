import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  public listaLenguajes:String[]= ["Java", "JavaScript", "C", "PHP", "C#"];
  public bandera:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarOcultar():void{
    console.log(this.bandera);
    this.bandera =  !this.bandera;
    console.log(this.bandera);
  }

}
