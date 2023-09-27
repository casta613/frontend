import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interface/cliente';
import {environment} from '../../environments/environments';
import { ResponseApi } from '../interface/resposeAPI';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Cliente/";
  constructor(private http: HttpClient) {

  }


  get(): Observable<Cliente[]> {

    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.get<Cliente[]>(`${this.apiUrl}listar`, { headers })

  }

  save(request: Cliente): Observable<ResponseApi> {
   
    return this.http.post<ResponseApi>(`${this.apiUrl}agregar`, request);
  }

  edit(request: Cliente): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.apiUrl}modificar/${request.ClienteID}`, request);
  }

  
}
