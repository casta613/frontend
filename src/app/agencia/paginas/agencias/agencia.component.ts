// agencia.component.ts

import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AgenciaService } from '../../../services/agencia.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Agencia } from '../../../interface/agencia';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {DialogAgenciaComponent} from '../../dialog-agencia/dialog-agencia.component';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css'],
  
})
export class AgenciaComponent implements OnInit {
  listaAgencia:Agencia[]=[];
  formularioAgencia: FormGroup;
  dtOptions: DataTables.Settings = {};
  displayedColumns: string[] = ['AgenciaID','Nombre','Telefono', 'acciones'];
  dataSource = new MatTableDataSource<Agencia>(this.listaAgencia);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _agenciaServicio: AgenciaService,
    private dialog: MatDialog,
    private fb:FormBuilder,
    
    
  ) {

    this.formularioAgencia = this.fb.group({
      nombre: ['', Validators.required],
    });
  
  }  

  mostrarAgencia() {
    this._agenciaServicio.getAgencias().subscribe({
      next: (data) => {
        
        this.listaAgencia = data;
        this.dataSource.data = this.listaAgencia;
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

  agregarAgencia() {
    this.dialog.open(DialogAgenciaComponent, {
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result === "agregado") {
        this.mostrarAgencia();
      }
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

    this.mostrarAgencia();
    
  } 



  
  

 

}
