import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  modules = [
    { name: 'Roles', route: '/list-roles'},
    { name: 'Modulos', route: '/list-modulos'},
    { name: 'Permisos', route: '/list-permisos'},
    { name: 'Clientes', route: '/list-clientes'},
    { name: 'Usuarios', route: '/list-usuarios'},
  ]
}
