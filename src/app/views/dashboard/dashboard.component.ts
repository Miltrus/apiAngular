import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  modules = [
    { name: 'Roles', route: '/roles'},
    { name: 'Modulos', route: '/modulos'},
    { name: 'TipoNovedades', route: '/tipoNovedades'}
  ]
}
