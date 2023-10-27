// agencia.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservaService } from '../../../services/reserva.service';
import { Reserva } from '../../../interface/reserva';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { pipe } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../../../cliente/dialog/dialog.component';
import {DialogComponent as DialogConfirmacion} from '../../../shared/components/dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent  {
  listaReserva:Reserva[]=[];
  displayedColumns: string[] = ['Cliente','Celular','Habitacion', 'FechaEntrada','FechaSalida'];
  dataSource = new MatTableDataSource<Reserva>(this.listaReserva);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  form: FormGroup;
  dtOptions: DataTables.Settings = {};
   Cliente:string = '';
   Celular:string = '';
   NumeroHabitacion:string = '';
   FechaEntrada:string = '';
   FechaSalida:string = '';
   
  

  constructor(
    private route: ActivatedRoute,
    private _reservacionesServicio: ReservaService,
    private dialog: MatDialog,
    private fb:FormBuilder,
    
  ) {
    this.form = this.fb.group({
      Cliente: ['', Validators.required],
      Celular: ['', Validators.required],
      NumeroHabitacion: ['', Validators.required],
      FechaEntrada: ['', Validators.required],
      FechaSalida: ['', Validators.required],
    });
    
  }  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {    

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      
    };

    this.mostrar();
    
  }

  mostrar() {
    this._reservacionesServicio.get().subscribe({
    next: (data) => {
      
      this.listaReserva = data.map((item) => {
        

        const datePipe = new DatePipe('en-US');
        const fechaEntradaFormateada = item.FechaEntrada ? datePipe.transform(item.FechaEntrada, 'dd-MM-yyyy') : null;
        const fechaSalidaFormateada = item.FechaSalida ? datePipe.transform(item.FechaSalida, 'dd-MM-yyyy') : null;
        

        return {
          ...item,
          FechaEntrada: fechaEntradaFormateada,
          FechaSalida: fechaSalidaFormateada,
        };
      });
      this.dataSource.data = this.listaReserva;
      console.log(this.listaReserva);
    },
    error: (e) => {
      // Manejar errores aquí
    }
  });

}

reporte() {
  this._reservacionesServicio.getreporte().subscribe({
  next: (data) => {
    console.log(data.base64);
    const binaryData = atob(data.base64);
const arrayBuffer = new ArrayBuffer(binaryData.length);
const uint8Array = new Uint8Array(arrayBuffer);

for (let i = 0; i < binaryData.length; i++) {
  uint8Array[i] = binaryData.charCodeAt(i);
}

const blob = new Blob([arrayBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

const blobURL = URL.createObjectURL(blob);

// Crear un enlace oculto en una nueva ventana
const newWindow = window.open(blobURL, '_blank');

if (newWindow) {
  const a = document.createElement('a');
  a.href = blobURL;
  a.download = 'nombre.xlsx'; // Reemplaza con el nombre deseado y la extensión del archivo
  a.style.display = 'none';
  newWindow.document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(blobURL);
} else {
  // Manejar el caso en que newWindow es nulo (por ejemplo, bloqueo de ventanas emergentes)
  console.error('No se pudo abrir una nueva ventana')

}
    
  },
  error: (e) => {
    // Manejar errores aquí
  }
});

}



}
