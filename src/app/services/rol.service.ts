import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../interface/rol';
import {environment} from '../../environments/environments';
import { ResponseApi } from '../interface/resposeAPI';
@Injectable({
  providedIn: 'root'
})
export class RolService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Usuario/rol/";
  constructor(private http: HttpClient) {

  }


  get(): Observable<Rol[]> {
    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<Rol[]>(`${this.apiUrl}listar`,{ headers })

  }

  save(request: Rol): Observable<ResponseApi> {
    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.post<ResponseApi>(`${this.apiUrl}Guardar`, request,{ headers });
  }

  edit(request: Rol): Observable<ResponseApi> {
    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.put<ResponseApi>(`${this.apiUrl}modificar/${request.RolID}`, request,{ headers });
  }


  
}
