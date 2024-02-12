import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TecnicosComponent } from './tecnicos/tecnicos.component';
import { IncidentesComponent } from './incidentes/incidentes.component';
import { ClientesDetailComponent } from './clientes-detail/clientes-detail.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'clientes', component: ClientesComponent},
  {path: 'tecnicos', component: TecnicosComponent},
  {path:'incidentes', component:IncidentesComponent},
  {path:'clientes/:clienteId', component: ClientesDetailComponent},
  {path:'crearCliente', component:CrearClienteComponent},
  {path:'**', redirectTo:'', pathMatch:'full' }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
