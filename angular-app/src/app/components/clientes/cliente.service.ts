import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import {CLIENTES} from './clientes.json';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string='http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders ({'Content-type':'application/json'});

  public getClientes():Observable<Cliente[]>{
    /*  objeto de la libreria de rxjs para devolver un obj
      return of(CLIENTES);
    */
   return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  createCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint,cliente,{headers: this.httpHeaders})
  };

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente,{headers: this.httpHeaders})
  }

  constructor(private http: HttpClient) {

   }
}
