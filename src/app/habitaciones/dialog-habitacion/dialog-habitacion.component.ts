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
  selector: 'app-dialog-habitacion',
  templateUrl: './dialog-habitacion.component.html',
  styleUrls: ['./dialog-habitacion.component.css'],
})
export class DialogoHabitacionComponent implements OnInit {
  form: FormGroup;
  listaTipo:TipoHabitacion[]=[];
  listaEstatus:EstatusHabitacion[]=[];

  dataTipo = new MatTableDataSource<TipoHabitacion>(this.listaTipo);
  dataEstatus = new MatTableDataSource<EstatusHabitacion>(this.listaEstatus);

  constructor(
    private dialogoReferencia: MatDialogRef<DialogoHabitacionComponent>,
    @Inject(MAT_DIALOG_DATA) public Editar: Habitacion,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _habitacionServicio: HabitacionesService,
    private _estatusServicio: EstatusHabitacionService,
    private _tipoHabitacionServicio: TipoHabitacionService
    
  ) {
    this.form = this.fb.group({
      HabitacionID: [null, Validators.required],
      Nombre: ['', Validators.required],
      Precio: [null, Validators.required],
      EstatusHabitacionID: [null, Validators.required],
      TipoHabitacionID: [null, Validators.required],
      Numero:['', Validators.required],
      Descripcion:['', Validators.required],

    }) 
    

  }

  ngOnInit(): void {

    if (this.Editar) {
      this.form.patchValue({
        HabitacionID: this.Editar.HabitacionID,
        Precio: Number(this.Editar.Precio),
        Numero: String(this.Editar.Numero),
        Descripcion: this.Editar.Descripcion,
        EstatusHabitacionID: Number(this.Editar.EstatusHabitacionID),
        TipoHabitacionID: Number(this.Editar.TipoHabitacionID),

        
        
      })
    };
    this.mostrarTipo();
    this.mostrarEsttus();
   
  }
  mostrarTipo() {
      this._tipoHabitacionServicio.get().subscribe({
      next: (data) => {
        console.log(data);
        this.listaTipo = data;
        this.dataTipo.data = this.listaTipo;
      },
      error: (e) => {
        // Manejar errores aquí
      }
    });

   

  }
  mostrarEsttus() {
    this._estatusServicio.get().subscribe({
    next: (data) => {
      console.log(data);
      this.listaEstatus = data;
      this.dataEstatus.data = this.listaEstatus;
    },
    error: (e) => {
      // Manejar errores aquí
    }
  });

 

}
  agregar() {
    const _habitacion: Habitacion = {
      HabitacionID:  this.form.value.HabitacionID == null ? 0 : this.form.value.HabitacionID,
      Descripcion: this.form.value.Descripcion,
      Numero: this.form.value.Numero,
      Precio: Number(this.form.value.Precio),
      EstatusHabitacionID: Number(this.form.value.EstatusHabitacionID),
      TipoHabitacionID: Number(this.form.value.TipoHabitacionID)
      
    }
    
    if (this.Editar) {
      console.log(_habitacion);
      this._habitacionServicio.edit(_habitacion).subscribe({
          next: (data) => {
  
            
              console.log(data);
              this.dialogoReferencia.close('editado')           
  
          },
          error: (e) => {
          },
          complete: () => {
          }
      }) 
      
      

    }else {
      
      this._habitacionServicio.save(_habitacion).subscribe({
        next: (data) => {

          
            console.log(data);
            
            this.dialogoReferencia.close('agregado')           

        },
        error: (e) => {
        },
        complete: () => {
        }
    }) 


    }
  }
  cerrarDialogo() {
    this.dialogoReferencia.close(); 
  }



}
