import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicios } from './servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private urlBase = "http://localhost:8080/incidentes-app/servicios";

  constructor(private ClienteHttp:HttpClient) { }

  obtenerServicios():Observable<Servicios[]>{
    return this.ClienteHttp.get<Servicios[]>(this.urlBase);
  }
}
