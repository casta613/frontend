import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  return this.http.get<Habitacion[]>(`${this.apiUrl}listar`)

  }

  save(request: Habitacion): Observable<ResponseApi> {
    return this.http.post<ResponseApi>(`${this.apiUrl}Guardar`, request);
  }

  
}
