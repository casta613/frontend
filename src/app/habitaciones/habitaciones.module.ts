import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitacionesRoutingModule } from './habitaciones-routing.module';
import { HabitacionesComponent } from './paginas/habitaciones/habitaciones.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    HabitacionesComponent,
    
  ],
  imports: [
    CommonModule,
    HabitacionesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule
    
  ]
})
export class HabitacionesModule { }
