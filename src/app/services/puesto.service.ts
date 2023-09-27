import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puesto } from '../interface/puesto';
import {environment} from '../../environments/environments';
import { ResponseApi } from '../interface/resposeAPI';
@Injectable({
  providedIn: 'root'
})
export class PuestoService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Empleado/puesto/";
  constructor(private http: HttpClient) {

  }


  get(): Observable<Puesto[]> {

    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.get<Puesto[]>(`${this.apiUrl}listar`, { headers })

  }

    
}
