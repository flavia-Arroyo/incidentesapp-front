import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Servicios } from '../servicios';
import { ServiciosService } from '../servicios.service';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router';
import { Clientes } from '../clientes';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent  implements OnInit{
  //cliente: Clientes = new Clientes();
  formularioCliente :FormGroup
  servicios:Servicios[];
 

   constructor(private clienteServicio:ClientesService,
    private servicio:ServiciosService,
    private form:FormBuilder,
     private enrutador:Router){
        this.formularioCliente = this.form.group({
      razonSocial :['', [Validators.required, Validators.minLength(6)]],
      cuit :['', Validators.required],
      domicilio:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      listaServicios:this.form.array([])

    });
  }
  ngOnInit(){
    this.obtenerServicios();
    }

    private obtenerServicios(){
      this.servicio.obtenerServicios().subscribe(
        datos=>{
          this.servicios = datos;
      
          console.log(datos)
        }
      )
    }

    
  hasErrors(controlName:string, errorType:string){
    return this.formularioCliente.get(controlName)?.hasError(errorType)&& this.formularioCliente.get(controlName)?.touched
  }
  get listaServicios(): FormArray {
    return this.formularioCliente.get('listaServicios') as FormArray;
  }
  
  
  onServicioSeleccionado(event:any, servicio:Servicios) {
  
    if (event.target.checked) {
      console.log('Seleccionado:', servicio.nombreServicio);
    
      this.listaServicios.push(this.form.group({
        servicioId :servicio.servicioId,
         nombreServicio : servicio.nombreServicio
        
      }));

      console.log("servicios seleccionados   " + this.listaServicios)
    } else {
      const index = this.listaServicios.controls.findIndex(x => x.value.id === servicio.servicioId);
      this.listaServicios.removeAt(index);
    }
  }
 

    enviar(){
    
      if(this.formularioCliente.valid){
      
        this.clienteServicio.agregarCliente(this.formularioCliente.value
          ).subscribe(()=>{

              this.enrutador.navigate(['clientes']);
        });
        
      }
      
      console.log(this.formularioCliente.value)

  
    
    
    
  
 
     
    
  

  }

  



}
