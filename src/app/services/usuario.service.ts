import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/usuario';
import {environment} from '../../environments/environments';
import { ResponseApi } from '../interface/resposeAPI';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Usuario/";
  constructor(private http: HttpClient) {

  }
  

  get(): Observable<Usuario[]> {
    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<Usuario[]>(`${this.apiUrl}listar`, { headers })

  }

  save(request: Usuario): Observable<ResponseApi> {
    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.post<ResponseApi>(`${this.apiUrl}agregar`, request, { headers });
  }

  edit(request: Usuario): Observable<ResponseApi> {
    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.put<ResponseApi>(`${this.apiUrl}modificar/${request.UsuarioID}`, request, { headers });
  }


  
}
