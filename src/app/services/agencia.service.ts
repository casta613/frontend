import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agencia } from '../interface/agencia';
import {environment} from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
    private endpoint:string=environment.endPoint;
    private apiUrl:string =this.endpoint+"/Agencia/";
  constructor(private http: HttpClient) {

  }


  getAgencias(): Observable<Agencia[]> {

return this.http.get<Agencia[]>(`${this.apiUrl}listar`)

  }

  
}
