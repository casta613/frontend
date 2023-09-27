import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitacionesRoutingModule } from './habitaciones-routing.module';
import { HabitacionesComponent } from './paginas/habitaciones/habitaciones.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DataTablesModule } from 'angular-datatables';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DialogoHabitacionComponent} from './dialog-habitacion/dialog-habitacion.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HabitacionesComponent,
    DialogoHabitacionComponent
    
  ],
  imports: [
    CommonModule,
    HabitacionesRoutingModule,
    MatButtonModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule
    
  ]
})
export class HabitacionesModule { }