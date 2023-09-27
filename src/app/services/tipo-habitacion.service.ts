import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoHabitacion } from '../interface/tipo-habitacion';
import {environment} from '../../environments/environments';
import { ResponseApi } from '../interface/resposeAPI';
@Injectable({
  providedIn: 'root'
})
export class TipoHabitacionService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Habitacion/";
  constructor(private http: HttpClient) {

  }


  get(): Observable<TipoHabitacion[]> {

    const token = sessionStorage.getItem('token'); 
    const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    return this.http.get<TipoHabitacion[]>(`${this.apiUrl}listar/tipo`, { headers })

  }

    
}
