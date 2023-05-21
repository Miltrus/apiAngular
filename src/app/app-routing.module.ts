import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { RolesComponent } from './views/rol/roles/roles.component';
import { NewRolComponent } from './views/rol/new-rol/new-rol.component';
import { EditRolComponent } from './views/rol/edit-rol/edit-rol.component'

import { ModulosComponent } from './views/modulo/modulos/modulos.component';
import { NewModuloComponent } from './views/modulo/new-modulo/new-modulo.component';
import { EditModuloComponent } from './views/modulo/edit-modulo/edit-modulo.component';

import { TipoNovedadesComponent } from './views/tipoNovedad/tipo-novedades/tipo-novedades.component';
import { NewTipoNovedadComponent } from './views/tipoNovedad/new-tipo-novedad/new-tipo-novedad.component';
import { EditTipoNovedadComponent } from './views/tipoNovedad/edit-tipo-novedad/edit-tipo-novedad.component';

const routes: Routes = [
  { path: '',  redirectTo: 'login', pathMatch: 'full'}, //ruta x defecto
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  
  { path: 'roles', component: RolesComponent },
  { path: 'new-rol', component: NewRolComponent },
  { path: 'edit-rol/:id', component: EditRolComponent},

  { path: 'modulos', component: ModulosComponent },
  { path: 'new-modulo', component: NewModuloComponent },
  { path: 'edit-modulo/:id', component: EditModuloComponent},

  { path: 'tipoNovedades', component: TipoNovedadesComponent },
  { path: 'new-tipo-novedad', component: NewTipoNovedadComponent },
  { path: 'edit-tipo-novedad/:id', component: EditTipoNovedadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent, 
  DashboardComponent, 

  RolesComponent, 
  NewRolComponent, 
  EditRolComponent,
  
  ModulosComponent,
  NewModuloComponent,
  EditModuloComponent,

  TipoNovedadesComponent,
  NewTipoNovedadComponent,
  EditTipoNovedadComponent,
]