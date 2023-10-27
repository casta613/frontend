import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {

  }


  get(): Observable<object> {
    const Numero = Math.floor(Math.random() * 90) + 10;
    return this.http.get<object>(`https://pokeapi.co/api/v2/pokemon/${Numero}`)

  }


  
}



