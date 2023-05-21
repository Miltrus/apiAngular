import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { LoginInterface } from '../../models/login.interface';
import { ResolveData, Router } from '@angular/router';
import { ResponseInterface } from '../../models/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginForm = new FormGroup({
    correoUsuario: new FormControl('', Validators.required),
    contrasenaUsuario: new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  errorStatus: boolean = false;
  errorMsg: any = '';

  ngOnInit(): void {
    /* this.checkLocalStorage(); */
  }

  /* checkLocalStorage() {
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  } */

  onLogin(form: LoginInterface) {
    this.api.LoginByEmail(form).subscribe(data => {
      let dataResponse: ResponseInterface = data;
      if (dataResponse.status == 'ok') {
        localStorage.setItem("token", dataResponse.token);
        this.router.navigate(['dashboard']);
        console.log(dataResponse.token);
      }
      else {
        this.errorStatus = true;
        this.errorMsg = dataResponse.msj;
      }
    });
  }
}
