// agencia.component.ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { AgenciaService } from '../../../services/agencia.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Agencia } from '../../../interface/agencia';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {DialogAgenciaComponent} from '../../dialog-agencia/dialog-agencia.component';
import { MatDialog } from '@angular/material/dialog';

import { pipe } from 'rxjs';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css']
})
export class AgenciaComponent implements OnInit {
  listaAgencia:Agencia[]=[];
  formularioAgencia: FormGroup;

  constructor(
    private _agenciaServicio: AgenciaService,
    private dialog: MatDialog,
    private fb:FormBuilder
  ) {

    this.formularioAgencia = this.fb.group({
      nombre: ['', Validators.required],
    });
  
  }

  

  mostrarAgencia() {
    this._agenciaServicio.getAgencias().subscribe({
      next: (data) => {
        console.log(data);

        this.listaAgencia = data;
      },
      error: (e) => {
        // Manejar errores aquí
      }
    });
  }

  editarAgencia(agencia: Agencia) {
    this.dialog.open(DialogAgenciaComponent, {
      disableClose: true,
      data: agencia
    }).afterClosed().subscribe(result => {

      if (result === "editado")
        this.mostrarAgencia();

    });
  }

  ngOnInit(): void {
    this.mostrarAgencia();
  } 

}
