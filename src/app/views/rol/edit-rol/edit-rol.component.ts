import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RolInterface } from '../../../models/rol/rol.interface';
import { ApiService } from '../../../services/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { ResponseInterface } from '../../../models/response.interface';

@Component({
  selector: 'app-edit-rol',
  templateUrl: './edit-rol.component.html',
  styleUrls: ['./edit-rol.component.css']
})
export class EditRolComponent implements OnInit{

  constructor(private router:Router, private activatedRouter:ActivatedRoute, private api:ApiService, private alerts:AlertsService) { }

  dataRol: RolInterface[] = [];
  editForm = new FormGroup({
    idRol: new FormControl(''),
    nombreRol: new FormControl(''),
    descripcionRol: new FormControl(''),
  })

  ngOnInit(): void {
    let idRol = this.activatedRouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getOneRol(idRol).subscribe(data => {
      this.dataRol = data ? [data] : []; //si data encontró algun valor, lo asignamos a dataRol envuelto en un arreglo, si data es null asignamos un arreglo vacio, si no se hace esto da error
      this.editForm.setValue({
        'idRol': this.dataRol[0]?.idRol || 'idRol',
        'nombreRol': this.dataRol[0]?.nombreRol || '',
        'descripcionRol': this.dataRol[0]?.descripcionRol || '',
      });
      console.log(this.editForm.value);
      
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(form: RolInterface){
    this.api.putRol(form).subscribe(data => {
      let respuesta: ResponseInterface = data;
      if(respuesta.status == 'ok'){
        this.alerts.showSuccess('El rol ha sido modificado exitosamente.', 'Modificación Exitosa');
        this.router.navigate(['roles']);
      }
      else{
        this.alerts.showError(respuesta.msj, "Error en la Modificación");
      }
    })
  }

  goBack(){
    this.router.navigate(['roles']);
  }
}