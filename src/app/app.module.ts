import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TecnicosComponent } from './tecnicos/tecnicos.component';
import { IncidentesComponent } from './incidentes/incidentes.component';
import { ClientesDetailComponent } from './clientes-detail/clientes-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    TecnicosComponent,
    IncidentesComponent,
    ClientesDetailComponent,
    CrearClienteComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
