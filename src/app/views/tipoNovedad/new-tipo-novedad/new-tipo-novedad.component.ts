import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { TipoNovedadService } from '../../../services/api/tipoNovedad/tipo-novedad.service';
import { tipoNovedadInterface } from '../../../models/tipoNovedad.interface';
import { ResponseInterface } from '../../../models/response.interface';

@Component({
  selector: 'app-new-tipoNovedad',
  templateUrl: './new-tipo-novedad.component.html',
  styleUrls: ['./new-tipo-novedad.component.css']
})
export class NewTipoNovedadComponent implements OnInit{

  constructor(private router:Router, private api:TipoNovedadService, private alerts:AlertsService) { }

  newForm = new FormGroup({
    idTipoNovedad: new FormControl(''),
    tipoNovedad: new FormControl('')
  })

  ngOnInit(): void {
  
  }

  postForm(form: tipoNovedadInterface){
    this.api.postTipoNovedad(form).subscribe(data => {
      let respuesta: ResponseInterface = data;
      if(respuesta.status == 'ok'){
        this.alerts.showSuccess('El tipo de novedad ha sido creado exitosamente.', 'Tipo de novedad Creado');
        this.router.navigate(['tipoNovedades']);
      }
      else{
        this.alerts.showError(respuesta.msj, 'Error al crear el tipo de novedad');
      }
    });
  }

  goBack(){
    this.router.navigate(['tipoNovedades']);
  }
}