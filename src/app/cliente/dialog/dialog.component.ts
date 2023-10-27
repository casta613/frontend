import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../../interface/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  form: FormGroup;
  boton:string = 'Agregar';

  constructor(
    private dialogoReferencia: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public Editar: Cliente,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _clienteServicio: ClienteService
    
  ) {
    this.form = this.fb.group({
      ClienteID: null,
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Celular: ['', Validators.required],
      Correo: ['', Validators.required],
      Documento: ['', Validators.required],
   

    }) 
    

  }

  ngOnInit(): void {

    if (this.Editar) {
      this.form.patchValue({
        ClienteID: this.Editar.ClienteID,
        Nombre: this.Editar.Nombre,
        Apellido: String(this.Editar.Apellido),
        Celular: String(this.Editar.Celular),
        Correo: String(this.Editar.Correo),
        Documento: String(this.Editar.Documento),
        
        
      })
      this.boton = 'Editar';
    }
   
  }

  agregar() {
    const _cliente: Cliente = {
      ClienteID:  this.form.value.ClienteID == null ? 0 : this.form.value.ClienteID,
      Nombre: this.form.value.Nombre,
      Apellido: this.form.value.Apellido,
      Celular: this.form.value.Celular,
      Correo: this.form.value.Correo,
      Documento: this.form.value.Documento,
      
    }
    
    if (this.Editar) {
      console.log(_cliente);
      this._clienteServicio.edit(_cliente).subscribe({
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
      
      this._clienteServicio.save(_cliente).subscribe({
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
    this.dialogoReferencia.close('cancelar'); 
  }



}
