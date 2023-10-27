import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../../interface/usuario';
import { UsuarioService } from '../../services/usuario.service';
import {RolService} from '../../services/rol.service';
import {Rol} from '../../interface/rol'

import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  form: FormGroup;
  listaRol:Rol[]=[];
  dataRol = new MatTableDataSource<Rol>(this.listaRol);
  boton:string = 'Agregar';

  constructor(
    private dialogoReferencia: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public Editar: Usuario,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _usuarioServicio:UsuarioService,
    private _rolServicio:RolService,
    
  ) {
    this.form = this.fb.group({
      UsuarioID: null,
      Usuario: ['', Validators.required],
      RolID: [null, Validators.required],
      Rol: '',
      Contrasenia:['', Validators.required],


    }) 
    

  }

  ngOnInit(): void {

    if (this.Editar) {
      this.form.patchValue({
        UsuarioID: this.Editar.UsuarioID,        
        RolID: this.Editar.RolID,       
        Usuario: String(this.Editar.Usuario),
        Rol: String(this.Editar.Rol),
        Contrasenia: String(this.Editar.Contrasenia),

        
        
      })
      this.boton = 'Editar';
    };
    this.mostrarRol();
   
  }
  mostrarRol() {
      this._rolServicio.get().subscribe({
      next: (data) => {
        console.log(data);
        this.listaRol = data;
        this.dataRol.data = this.listaRol;
      },
      error: (e) => {
        // Manejar errores aquí
      }
    });
  }
  

  agregar() {
    const _usuario: Usuario = {
      UsuarioID:  this.form.value.UsuarioID == null ? 0 : this.form.value.UsuarioID,
      Usuario: this.form.value.Usuario,
      Contrasenia: this.form.value.Contrasenia,
      RolID: Number(this.form.value.RolID),

      
    }
    
    if (this.Editar) {
      console.log(_usuario);
      this._usuarioServicio.edit(_usuario).subscribe({
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
      
      this._usuarioServicio.save(_usuario).subscribe({
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
