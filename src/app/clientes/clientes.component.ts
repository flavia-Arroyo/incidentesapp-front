import { Component } from '@angular/core';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';

import { Servicios } from '../servicios';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  
})
export class ClientesComponent {
  clientes :Clientes[];
  loading:boolean=true;
 

  constructor(private clienteServicio :ClientesService ){}
  ngOnInit(){
    setTimeout(()=>{
      this.obtenerClientes();
      this.loading = false;

    }, 2000);
   
   
  }
 
  private obtenerClientes(){
    //consumir datos del observable
    this.clienteServicio.obtenerClientesLista().subscribe(
      datos=>{
        this.clientes = datos;
        console.log(datos)
      }
    )


  }


}
