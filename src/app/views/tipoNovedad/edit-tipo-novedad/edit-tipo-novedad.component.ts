import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tipoNovedadInterface } from '../../../models/tipoNovedad.interface';
import { TipoNovedadService } from '../../../services/api/tipoNovedad/tipo-novedad.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { ResponseInterface } from '../../../models/response.interface';

@Component({
  selector: 'app-edit-tipo-novedad',
  templateUrl: './edit-tipo-novedad.component.html',
  styleUrls: ['./edit-tipo-novedad.component.css']
})
export class EditTipoNovedadComponent implements OnInit{

  constructor(private router:Router, private activatedRouter:ActivatedRoute, private api:TipoNovedadService, private alerts:AlertsService) { }

  dataTipoNovedad: tipoNovedadInterface[] = [];
  editForm = new FormGroup({
    idTipoNovedad: new FormControl(''),
    tipoNovedad: new FormControl('')
  })

  ngOnInit(): void {
    let idTipoNovedad = this.activatedRouter.snapshot.paramMap.get('id');
    let token = this.getToken();
    this.api.getOneTipoNovedad(idTipoNovedad).subscribe(data => {
      this.dataTipoNovedad = data ? [data] : []; //si data encontró algun valor, lo asignamos a dataRol envuelto en un arreglo, si data es null asignamos un arreglo vacio, si no se hace esto da error
      this.editForm.setValue({
        'idTipoNovedad': this.dataTipoNovedad[0]?.idTipoNovedad || 'idTipoNovedad',
        'tipoNovedad': this.dataTipoNovedad[0]?.tipoNovedad || ''
      });
      console.log(this.editForm.value);
      
    })
  }

  getToken(){
    return localStorage.getItem('token');
  }

  postForm(id: any){
    this.api.putTipoNovedades(id).subscribe(data => {
      let respuesta: ResponseInterface = data;
      if(respuesta.status == 'ok'){
        this.alerts.showSuccess('El tipo de novedad ha sido modificado exitosamente.', 'Modificación Exitosa');
        this.router.navigate(['tipoNovedades']);
      }
      else{
        this.alerts.showError(respuesta.msj, "Error en la Modificación");
      }
    })
  }

  goBack(){
    this.router.navigate(['tipoNovedades']);
  }
}