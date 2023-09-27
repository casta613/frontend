import { Component, ViewChild } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { Empleado } from 'src/app/interface/empleado';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent {
  listaEmpleado:Empleado[]=[];
  form: FormGroup;
  dtOptions: DataTables.Settings = {};
  displayedColumns: string[] = ['EmpleadoID','Nombre','Telefono','Puesto' ,'Horario','acciones'];
  dataSource = new MatTableDataSource<Empleado>(this.listaEmpleado);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _empleadoServicio: EmpleadoService,
    private dialog: MatDialog,
    private fb:FormBuilder,
    
    
  ) {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
    });
  
  }  

  mostrar() {
    this._empleadoServicio.get().subscribe({
      next: (data) => {
        console.log(data);
        this.listaEmpleado = data;
        this.dataSource.data = this.listaEmpleado;
      },
      error: (e) => {
        // Manejar errores aquí
      }
    });

   

  }

  editar(empleado: Empleado) {
    this.dialog.open(DialogComponent, {
      disableClose: true,
      data: empleado
    }).afterClosed().subscribe(result => {

      if (result === "editado")
        this.mostrar();

    });
  }

  agregar() {
    this.dialog.open(DialogComponent, {
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result === "agregado") {
        this.mostrar();
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

    this.mostrar();
    
  } 
}
