import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado_routing.module';
import { EmpleadoComponent } from './componente/empleado.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {DialogComponent}from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DataTablesModule } from 'angular-datatables';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    EmpleadoComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    SharedModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    DataTablesModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    EmpleadoRoutingModule
  ]
})
export class EmpleadosModule { }
