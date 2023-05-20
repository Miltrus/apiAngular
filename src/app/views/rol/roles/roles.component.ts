import { Component, OnInit} from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { Router } from '@angular/router';
import { ListRolesInterface } from '../../../models/rol/list-roles.interface';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit{

  constructor(private api:ApiService, private router:Router) {  }

  roles: ListRolesInterface[] = [];

  ngOnInit(): void {
    this.api.getAllRoles().subscribe(data => {
      this.roles = data;
      console.log(this.roles);
    })
  }

  editRol(id:any){
    this.router.navigate(['edit-rol', id]);
  }

  newRol(){
    this.router.navigate(['new-rol']);
  }

  deleteRol(id: any): void {
    if (confirm('¿Estás seguro de que deseas eliminar este rol?')) {
      this.api.deleteRol(id).subscribe(() => {
        this.router.navigate(['roles']);
      });
    }
  }
}