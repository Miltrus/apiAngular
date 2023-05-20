import { Injectable } from '@angular/core';
import { LoginInterface } from '../../models/login.interface';
import { ResponseInterface } from '../../models/response.interface';
import { ListRolesInterface } from '../../models/rol/list-roles.interface';
import { RolInterface } from '../../models/rol/rol.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://localhost:3030/';

  constructor(private http:HttpClient) { }

  LoginByEmail(form: LoginInterface):Observable<ResponseInterface>{
    let address = this.url + 'login';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<ResponseInterface>(address, form, {headers});
  }

  getAllRoles():Observable<ListRolesInterface[]>{
    let address = this.url + 'rol';
    return this.http.get<ListRolesInterface[]>(address);
  }

  getOneRol(id: any):Observable<RolInterface>{
    let address = this.url + 'rol/' + id;
    return this.http.get<RolInterface>(address);
  }

  putRol(form: RolInterface):Observable<RolInterface>{
    let address = this.url + 'rol/';
    return this.http.put<RolInterface>(address, form);
  }

  deleteRol(id: any):Observable<ResponseInterface>{
    let addres = this.url + 'rol/' + id;
    return this.http.delete<ResponseInterface>(addres);
  }
}
