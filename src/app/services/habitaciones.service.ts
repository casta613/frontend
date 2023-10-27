import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitacion } from '../interface/habitacion';
import {environment} from '../../environments/environments';
import { ResponseApi } from '../interface/resposeAPI';
@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Habitacion/";
  constructor(private http: HttpClient) {

  }


  getHabitaciones(): Observable<Habitacion[]> {
    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
  return this.http.get<Habitacion[]>(`${this.apiUrl}listar`,{ headers })

  }

  getHabitacion(request: number): Observable<Habitacion> {
    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.get<Habitacion>(`${this.apiUrl}listar/${request}`,{ headers });
  }

  save(request: Habitacion): Observable<ResponseApi> {
    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.post<ResponseApi>(`${this.apiUrl}agregar`, request,{ headers });
  }

  edit(request: Habitacion): Observable<ResponseApi> {
    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.put<ResponseApi>(`${this.apiUrl}modificar/${request.HabitacionID}`, request,{ headers });
  }


  
}
