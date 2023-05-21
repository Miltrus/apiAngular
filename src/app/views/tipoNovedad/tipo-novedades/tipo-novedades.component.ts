import { Component, OnInit} from '@angular/core';
import { TipoNovedadService } from '../../../services/api/tipoNovedad/tipo-novedad.service';
import { Router } from '@angular/router';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { ResponseInterface } from 'src/app/models/response.interface';
import { tipoNovedadInterface } from 'src/app/models/tipoNovedad.interface';


@Component({
  selector: 'app-roles',
  templateUrl: './tipo-novedades.component.html',
  styleUrls: ['./tipo-novedades.component.css']
})
export class TipoNovedadesComponent implements OnInit{

  constructor(private api:TipoNovedadService, private router:Router, private alerts:AlertsService) {  }

  tipoNovedades: tipoNovedadInterface[] = [];

  ngOnInit(): void {
    this.api.getAlltipoNovedades().subscribe(data => {
      this.tipoNovedades = data;
      console.log(this.tipoNovedades);
    })
  }

  editTipoNovedad(id:any){
    this.router.navigate(['edit-tipo-novedad', id]);
  }

  newTipoNovedad(){
    this.router.navigate(['new-tipo-novedad']);
  }

  deleteTipoNovedad(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar este tipo de novedad?')) {
      
      this.api.deleteTipoNovedades(id).subscribe(data => {
      let respuesta: ResponseInterface = data;

      if(respuesta.status == 'ok'){
        this.alerts.showSuccess('El tipo de novedad ha sido eliminado exitosamente.', 'Eliminación Exitosa');
        window.location.reload();
      }else{
        this.alerts.showError('No se pudo eliminar el tipo de novedad. Inténtalo nuevamente.', 'Error en la Eliminación');
      }
      });
    }
  }

  goBack(){
    this.router.navigate(['dashboard']);
  }
}