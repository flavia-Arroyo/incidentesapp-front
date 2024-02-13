import{HttpClient} from'@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from './clientes';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private urlBase="http://localhost:8080/incidentes-app/clientes";
  constructor( private clienteHttp: HttpClient) {} 

  obtenerClientesLista():Observable<Clientes[]>{
      return this.clienteHttp.get<Clientes[]>(this.urlBase);

    
  }
  obtenerCliente(id:number ):Observable<Clientes>{
    return this.clienteHttp.get<Clientes>(`${this.urlBase}/${id}`)
  }
  agregarCliente(cliente:Clientes):Observable<object>{
    console.log("recibe para mandar: " + cliente.email + cliente.razonSocial + cliente.listaServicios + cliente.domicilio + cliente.clienteId)
    return this.clienteHttp.post(this.urlBase, cliente);

  }
 
 
}
