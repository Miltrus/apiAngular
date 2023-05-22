import { Component, OnInit} from '@angular/core';
import { ClienteService } from '../../../services/api/cliente/cliente.service';
import { Router } from '@angular/router';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { ResponseInterface } from 'src/app/models/response.interface';
import { ClienteInterface } from 'src/app/models/cliente.interface';
import { TipoDocumentoInterface } from 'src/app/models/tipo-documento.interface';


@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit{

  constructor(private api:ClienteService, private router:Router, private alerts:AlertsService) {  }

  clientes: ClienteInterface[] = [];
  tiposDocumento: TipoDocumentoInterface[] = [];

  ngOnInit(): void {
    this.api.getAllClientes().subscribe(data => {
      this.clientes = data;
    })
    this.api.getTipoDocumento().subscribe(data => {
      this.tiposDocumento = data;
    });
  }

  editCliente(id:any){
    this.router.navigate(['edit-cliente', id]);
  }

  newCliente(){
    this.router.navigate(['new-cliente']);
  }

  deleteCliente(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      
      this.api.deleteCliente(id).subscribe(data => {
      let respuesta: ResponseInterface = data;

      if(respuesta.status == 'ok'){
        this.alerts.showSuccess('El cliente ha sido eliminado exitosamente.', 'Eliminación Exitosa');
        window.location.reload();
      }else{
        this.alerts.showError('No se pudo eliminar el cliente.', 'Error en la Eliminación');
      }
      });
    }
  }

  getTipoDocumento(idTipoDocumento: any): string {
    const tipoDocumento = this.tiposDocumento.find(tipo => tipo.idTipoDocumento === idTipoDocumento);
    return tipoDocumento?.nombreTipo || '';
  }   
  
  goBack(){
    this.router.navigate(['dashboard']);
  }
}