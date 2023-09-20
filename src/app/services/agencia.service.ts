import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agencia } from '../interface/agencia';
import {environment} from '../../environments/environments';
import { ResponseApi } from '../interface/resposeAPI';
@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Agencia/";
  constructor(private http: HttpClient) {

  }


  getAgencias(): Observable<Agencia[]> {

    const token = sessionStorage.getItem('token'); // O sessionStorage.getItem('token') si lo almacenas en sessionStorage

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.get<Agencia[]>(`${this.apiUrl}listar`, { headers })

  }

  save(request: Agencia): Observable<ResponseApi> {
   
    return this.http.post<ResponseApi>(`${this.apiUrl}agregar`, request);
  }

  edit(request: Agencia): Observable<ResponseApi> {
    return this.http.put<ResponseApi>(`${this.apiUrl}modificar/${request.AgenciaID}`, request);
  }

  
}
