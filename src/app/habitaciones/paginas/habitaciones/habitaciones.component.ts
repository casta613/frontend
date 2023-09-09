// agencia.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { HabitacionesService } from '../../../services/habitaciones.service';
import { Habitacion } from '../../../interface/habitacion';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import { pipe } from 'rxjs';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  listaHabitacion:Habitacion[]=[];
  formularioHabitaciones: FormGroup;

  constructor(
    private _habitacionesServicio: HabitacionesService,
    private fb:FormBuilder
  ) {

    this.formularioHabitaciones = this.fb.group({
      nombre: ['', Validators.required],
    });
  
  }  

  mostrarHabitaciones() {
    this._habitacionesServicio.getHabitaciones().subscribe({
      next: (data) => {
        console.log(data);

        this.listaHabitacion = data;
      },
      error: (e) => {
        // Manejar errores aquí
      }
    });
  }

  ngOnInit(): void {
    this.mostrarHabitaciones();
  } 

}
