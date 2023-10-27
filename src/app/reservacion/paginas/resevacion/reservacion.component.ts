// agencia.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservaService } from '../../../services/reserva.service';
import { Reserva } from '../../../interface/reserva';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { pipe } from 'rxjs';
import { DialogoComponent } from '../../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {Habitacion} from '../../../interface/habitacion';
import {Cliente} from '../../../interface/cliente';
import {HabitacionesService} from '../../../services/habitaciones.service';
import {ClienteService} from '../../../services/cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../../../cliente/dialog/dialog.component';
import {DialogComponent as DialogConfirmacion} from '../../../shared/components/dialog/dialog.component';


@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent  {
  listaReserva:Reserva[]=[];
  listaHabitacion:Habitacion = {} as Habitacion;
  listaCliente:Cliente = {} as Cliente;
  form: FormGroup;
   HabitacionID:number = 0;
   No:string = '';
   Precio:string = '';
   Tipo:string = '';
   Nombre:string = '';
   Apellido:string = '';
   Celular:string = '';
   ClienteID:number = 0;

  constructor(
    private route: ActivatedRoute,
    private _reservacionesServicio: ReservaService,
    private _habitacionesServicio: HabitacionesService,
    private _clienteServicio: ClienteService,
    private router: Router,

    private dialog: MatDialog,
    private fb:FormBuilder
    
  ) {

    this.form = this.fb.group({
      FechaEntrada: ['', Validators.required],
      FechaSalida: ['', Validators.required],
      
      Documento: ['', Validators.required],
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Celular: ['', Validators.required],
    });
  }  

  ngOnInit(): void {
    this.HabitacionID = this.route.snapshot.params['Id'];
    console.log(this.HabitacionID);
    this.mostrarHabitacion();
  }

  mostrarHabitacion() {
    this._habitacionesServicio.getHabitacion(Number(this.HabitacionID)).subscribe({
    next: (data) => {
      console.log(data);
      this.listaHabitacion = data;
      this.No = this.listaHabitacion.Numero;
      this.Precio = String(this.listaHabitacion.Precio);
      this.Tipo = String(this.listaHabitacion.TipoHabitacion);
    },
    error: (e) => {
      // Manejar errores aquí
    }
  });

}

buscarCliente() {
  this._clienteServicio.getCliente(String(this.form.value.Documento)).subscribe({
  next: (data) => {
    console.log(data);
    this.listaCliente = data;
    this.ClienteID = Number(this.listaCliente.ClienteID),
    this.Nombre =String(this.listaCliente.Nombre),
    this.Apellido = String(this.listaCliente.Apellido),
    this.Celular = String(this.listaCliente.Celular)

    this.form.patchValue({
      Nombre: (this.listaCliente.Nombre && this.listaCliente.Nombre.trim() !== '') ? this.listaCliente.Nombre : '',
      Apellido: (this.listaCliente.Apellido && this.listaCliente.Apellido.trim() !== '') ? this.listaCliente.Apellido : '',
      Celular: (this.listaCliente.Celular && this.listaCliente.Celular.trim() !== '') ? this.listaCliente.Celular : ''
    });
    
  
    
  },
  error: (e) => {
    // Manejar errores aquí
  }
});
 
}
agregarCliente(){
  this.dialog.open(DialogComponent, {
    disableClose: true
  }).afterClosed().subscribe(result => {
    if (result === "agregado") {
      this.dialog.open(DialogConfirmacion, {
        data: 'agregado'
      });
    }
  });
}
agregarReserva(){
  
      
  
  const _reserva: Reserva ={
    ReservaHabitacionID: 0,
    ClienteID: Number(this.ClienteID),
    HabitacionID: Number(this.HabitacionID),  
    Fecha:  new Date(),
    FechaEntrada:this.form.value.FechaEntrada,
    FechaSalida:this.form.value.FechaSalida
  }
  this._reservacionesServicio.save(_reserva).subscribe({
    next: (data) => {

      
        console.log(data);
        this.form.reset();
        this.dialog.open(DialogConfirmacion, {
          data: 'agregado'
        });
        this.router.navigate(['/habitaciones']);

    },
    error: (e) => {
    },
    complete: () => {
    }
})
    
}

}
