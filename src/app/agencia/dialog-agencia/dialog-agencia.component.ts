import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
//import { Categoria } from '../../../../interfaces/categoria';
import { Agencia } from '../../interface/agencia';
//import { CategoriaService } from '../../../../services/categoria.service';
import { AgenciaService } from '../../services/agencia.service';

@Component({
  selector: 'app-dialog-agencia',
  templateUrl: './dialog-agencia.component.html',
  styleUrls: ['./dialog-agencia.component.css'],
})
export class DialogAgenciaComponent implements OnInit {
  formAgencia: FormGroup;
  accion: string = "Agregar"
  accionBoton: string = "Guardar";
   

  constructor(
    private dialogoReferencia: MatDialogRef<DialogAgenciaComponent>,
    @Inject(MAT_DIALOG_DATA) public agenciaEditar: Agencia,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    //private _categoriaServicio: CategoriaService,
    private _agenciaServicio: AgenciaService
    
  ) {
    this.formAgencia = this.fb.group({
      AgenciaID: [null, Validators.required],
      Nombre: ['', Validators.required],
      Telefono: ['', Validators.required],
   

    }) 
    

  }

  ngOnInit(): void {

    if (this.agenciaEditar) {
      this.formAgencia.patchValue({
        AgenciaID: this.agenciaEditar.AgenciaID,
        Nombre: this.agenciaEditar.Nombre,
        Telefono: String(this.agenciaEditar.Telefono),
        
        
      })
    }
   
  }

  agregarAgencia() {
    const _agencia: Agencia = {
      AgenciaID:  this.formAgencia.value.AgenciaID == null ? 0 : this.formAgencia.value.AgenciaID,
      Nombre: this.formAgencia.value.Nombre,
      Telefono: this.formAgencia.value.Telefono,
      
    }
    
    if (this.agenciaEditar) {
      console.log(_agencia);
      this._agenciaServicio.edit(_agencia).subscribe({
          next: (data) => {
  
            
              console.log(data);
              this.dialogoReferencia.close('editar')           
  
          },
          error: (e) => {
          },
          complete: () => {
          }
      }) 
      
      

    }else {
      
      this._agenciaServicio.save(_agencia).subscribe({
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
    this.dialogoReferencia.close(); // This will close the dialog
  }

  /*mostrarAlerta(mensaje: string, tipo: string) {
    this._snackBar.open(mensaje, tipo, {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    });
  }*/

}
