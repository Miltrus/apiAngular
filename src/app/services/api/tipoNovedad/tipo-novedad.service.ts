import { Injectable } from '@angular/core';
import { ResponseInterface } from '../../../models/response.interface';
import { tipoNovedadInterface } from '../../../models/tipoNovedad.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // 

@Injectable({
  providedIn: 'root'
})
export class TipoNovedadService {

  url:string = 'http://localhost:3030/';

  constructor(private http:HttpClient) { }

  getAlltipoNovedades():Observable<tipoNovedadInterface[]>{
    let address = this.url + 'tipoNovedad';
    return this.http.get<tipoNovedadInterface[]>(address);
  }

  getOneTipoNovedad(id: any):Observable<tipoNovedadInterface>{
    let address = this.url + 'tipoNovedad/' + id;
    return this.http.get<tipoNovedadInterface>(address);
  }

  postTipoNovedad(form: tipoNovedadInterface):Observable<ResponseInterface>{
    let address = this.url + 'tipoNovedad';
    return this.http.post<ResponseInterface>(address, form);
  }

  putTipoNovedades(id: any):Observable<ResponseInterface>{
    let address = this.url + 'tipoNovedad/' + id;
    return this.http.put<ResponseInterface>(address, id);
  }

  deleteTipoNovedades(id: any):Observable<ResponseInterface>{
    let addres = this.url + 'tipoNovedad/' + id;
    return this.http.delete<ResponseInterface>(addres);
  }
}
