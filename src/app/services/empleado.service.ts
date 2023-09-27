import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../interface/empleado';
import {environment} from '../../environments/environments';
import { ResponseApi } from '../interface/resposeAPI';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Empleado/";
  constructor(private http: HttpClient) {

  }


  get(): Observable<Empleado[]> {

    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.get<Empleado[]>(`${this.apiUrl}listar`, { headers })

  }

  save(request: Empleado): Observable<ResponseApi> {
   
    return this.http.post<ResponseApi>(`${this.apiUrl}agregar`, request);
  }

  edit(request: Empleado): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.apiUrl}modificar/${request.EmpleadoID}`, request);
  }

  
}
