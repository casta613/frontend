// agencia.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { HabitacionesService } from '../../../services/habitaciones.service';
import { Habitacion } from '../../../interface/habitacion';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import { pipe } from 'rxjs';
import { DialogoHabitacionComponent } from '../../dialog-habitacion/dialog-habitacion.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {ApiService} from '../../../services/api.service';
import { data } from 'jquery';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  listaHabitacion:Habitacion[]=[];
  
  formularioHabitaciones: FormGroup;
  list: any = {}; 
  pokemon:string='';
  pokemonName:string='';

  constructor(
    private router: Router,
    private _apiServicio: ApiService,
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
    this.get();
  } 

  get(){

    this._apiServicio.get().subscribe({
      next:(data: any)=>{
        console.log(data)
        this.list = data;
         this.pokemon = this.list.sprites.front_default; 
         this.pokemonName= this.list.name;    
         console.log(this.pokemon);
      }
    })
  }
  
  reservarHabitacion(habitacion: Habitacion){
    if(habitacion.EstatusHabitacion === "DISPONIBLE"){
    this.router.navigate(['/reservacion', { Id: habitacion.HabitacionID }]);
    }

  }
  
  editarHabitacion(habitacion: Habitacion) {
    this.dialog.open(DialogoHabitacionComponent, {
      disableClose: true,
      data: habitacion
    }).afterClosed().subscribe(result => {

      if (result === "editado")
        this.mostrar();

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
