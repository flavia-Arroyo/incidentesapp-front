import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Servicios } from '../servicios';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent  implements OnInit{
  //cliente: Clientes = new Clientes();
  formularioCliente :FormGroup
  servicios:Servicios[];

   constructor(private servicio:ServiciosService,private form:FormBuilder){
        this.formularioCliente = this.form.group({
      razonSocial :['', [Validators.required, Validators.minLength(6)]],
      cuit :['', Validators.required],
      direccion:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      serviciosSeleccionados:this.form.array([])

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
  get serviciosSeleccionados(): FormArray {
    return this.formularioCliente.get('serviciosSeleccionados') as FormArray;
  }
  
  
  onServicioSeleccionado(event:any, servicio:any) {
    if (event.target.checked) {
      console.log("entro a la validacion")
      this.serviciosSeleccionados.push(this.form.group({
        id: servicio.id,
        nombre: servicio.nombre
        
      }));
    } else {
      const index = this.serviciosSeleccionados.controls.findIndex(x => x.value.id === servicio.id);
      this.serviciosSeleccionados.removeAt(index);
    }
  }
 
  enviar(){
    console.log(this.formularioCliente)
    
   /* const serviciosSeleccionados = Object.keys(this.servicioSeleccionados).filter(id =>
      this.servicioSeleccionados[id]).map(Number);
    
   this.clienteService.crearCliente(this.nombreCliente, serviciosSeleccionados).subscribe(
      () => {
        console.log('Cliente creado exitosamente');
        
      }*/

  }

  



}
