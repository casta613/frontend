// agencia.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { HabitacionesService } from '../../../services/habitaciones.service';
import { Habitacion } from '../../../interface/habitacion';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import { pipe } from 'rxjs';
import { DialogoHabitacionComponent } from '../../dialog-habitacion/dialog-habitacion.component';
import { MatDialog } from '@angular/material/dialog';

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
    private dialog: MatDialog,
    private fb:FormBuilder
  ) {

    this.formularioHabitaciones = this.fb.group({
      nombre: ['', Validators.required],
    });
  
  }  

  mostrar() {
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
    this.mostrar();
  } 
  
  detalleHabitacion(habitacion: any): void {
    const dialogRef = this.dialog.open(DialogoHabitacionComponent, {
      data: { habitacion }, // Pasa los datos de la habitación al cuadro de diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró con resultado:', result);
    });
  }
  agregar() {
    this.dialog.open(DialogoHabitacionComponent, {
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result === "agregado") {
        this.mostrar();
      }
    });
  }
}
