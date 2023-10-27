import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../interface/reserva';
import {environment} from '../../environments/environments';
import { ResponseApi } from '../interface/resposeAPI';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Reserva/";
  constructor(private http: HttpClient) {

  }


  get(): Observable<Reserva[]> {
    const token = sessionStorage.getItem('token'); // O sessionStorage.getItem('token') si lo almacenas en sessionStorage

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<Reserva[]>(`${this.apiUrl}listar`,{ headers })

  }

  getreporte(): Observable<ResponseApi> {
    const token = sessionStorage.getItem('token'); // O sessionStorage.getItem('token') si lo almacenas en sessionStorage

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.get<ResponseApi>(`${this.apiUrl}reporte`,{ headers })
  
    }

  save(request: Reserva): Observable<ResponseApi> {
    const token = sessionStorage.getItem('token'); // O sessionStorage.getItem('token') si lo almacenas en sessionStorage

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.post<ResponseApi>(`${this.apiUrl}agregar`, request,{ headers });
  }

  edit(request: Reserva): Observable<ResponseApi> {
    const token = sessionStorage.getItem('token'); // O sessionStorage.getItem('token') si lo almacenas en sessionStorage

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.put<ResponseApi>(`${this.apiUrl}modificar/${request.ReservaHabitacionID}`, request,{ headers });
  }
  
}
