import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstatusHabitacion } from '../interface/estatus-habitacion';
import {environment} from '../../environments/environments';
import { ResponseApi } from '../interface/resposeAPI';
@Injectable({
  providedIn: 'root'
})
export class EstatusHabitacionService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Habitacion/";
  constructor(private http: HttpClient) {

  }


  get(): Observable<EstatusHabitacion[]> {

    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.get<EstatusHabitacion[]>(`${this.apiUrl}listar/estatus`, { headers })

  }

    
}
