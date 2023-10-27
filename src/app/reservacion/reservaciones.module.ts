import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservacionesRoutingModule } from './reservaciones-routing.module';
import { ReservacionComponent } from './paginas/resevacion/reservacion.component';
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
import {DialogoComponent} from './dialog/dialog.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ReservacionComponent,
    DialogoComponent
    
  ],
  imports: [
    CommonModule,
    ReservacionesRoutingModule,
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
export class ReservacionesModule { }