import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { ApiService } from '../../../services/api/api.service';
import { RolInterface } from '../../../models/rol/rol.interface';
import { ResponseInterface } from '../../../models/response.interface';

@Component({
  selector: 'app-new-rol',
  templateUrl: './new-rol.component.html',
  styleUrls: ['./new-rol.component.css']
})
export class NewRolComponent implements OnInit{

  constructor(private router:Router, private api:ApiService, private alerts:AlertsService) { }

  newForm = new FormGroup({
    idRol: new FormControl(''),
    nombreRol: new FormControl(''),
    descripcionRol: new FormControl(''),
  })

  ngOnInit(): void {
  
  }

  postForm(form: RolInterface){
    this.api.postRol(form).subscribe(data => {
      let respuesta: ResponseInterface = data;
      if(respuesta.status == 'ok'){
        this.alerts.showSuccess('El rol ha sido creado exitosamente.', 'Rol Creado');
        this.router.navigate(['roles']);
      }
      else{
        this.alerts.showError(respuesta.msj, 'Error al crear el rol');
      }
    });
  }

  goBack(){
    this.router.navigate(['roles']);
  }
}