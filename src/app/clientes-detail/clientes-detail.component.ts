import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';
import { Servicios } from '../servicios';

@Component({
  selector: 'app-clientes-detail',
  templateUrl: './clientes-detail.component.html',
  styleUrls: ['./clientes-detail.component.css']
})
export class ClientesDetailComponent implements OnInit {
  cliente : Clientes;
  clienteId: number;
  servicios:Servicios[];
  //clienteList: Clientes[] 
  constructor(private clienteServicio :ClientesService,private route :ActivatedRoute){}

  ngOnInit():void{
    this.obtenerClienteId();
   /* this._route.params.subscribe(params =>{
      this.clientes = this.clienteList.find(cliente => cliente.clienteId == params['clienteId']);
      console.log(this.clientes)
    })*/
  }
  obtenerClienteId(){
     //let clienteId = this.route.snapshot.paramMap.get('clienteId');
     this.route.params.subscribe(params => {
      this.clienteId = +params['clienteId'];
     
      this.clienteServicio.obtenerCliente(this.clienteId).subscribe(
        dato=>{
          this.cliente = dato;
          this.servicios= dato.listaServicios
          console.log(dato)
        
  
        }
      )
    });
     
  
  }

  
 
  

}
