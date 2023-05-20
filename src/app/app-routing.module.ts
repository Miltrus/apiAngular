import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RolesComponent } from './views/rol/roles/roles.component';
import { NewRolComponent } from './views/rol/new-rol/new-rol.component';
import { EditRolComponent } from './views/rol/edit-rol/edit-rol.component'

const routes: Routes = [
  { path: '',  redirectTo: 'login', pathMatch: 'full'}, //ruta x defecto
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'new-rol', component: NewRolComponent },
  { path: 'edit-rol/:id', component: EditRolComponent}
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
  EditRolComponent
]