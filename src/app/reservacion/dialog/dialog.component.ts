import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoHabitacion } from '../../interface/tipo-habitacion';
import { EstatusHabitacion } from '../../interface/estatus-habitacion';
import { Habitacion } from '../../interface/habitacion';

import { TipoHabitacionService } from '../../services/tipo-habitacion.service';
import {EstatusHabitacionService} from '../../services/estatus-habitacion.service';
import {HabitacionesService} from '../../services/habitaciones.service';

import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogoComponent {
  
 

}
  



