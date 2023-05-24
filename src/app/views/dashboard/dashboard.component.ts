import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['login']);
    }
  }

  modules = [
    { name: 'Roles', route: '/list-roles'},
    { name: 'Modulos', route: '/list-modulos'},
    { name: 'Permisos', route: '/list-permisos'},
    { name: 'Clientes', route: '/list-clientes'},
    { name: 'Usuarios', route: '/list-usuarios'},
  ]
}
