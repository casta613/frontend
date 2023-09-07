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
  styleUrls: ['./dialog-agencia.component.css']
})
export class DialogAgenciaComponent implements OnInit {
  formAgencia: FormGroup;
  accion: string = "Agregar"
  accionBoton: string = "Guardar";
  //listaCategorias: Categoria[] = [];
  //imagen: string | null = null;
  //imagenCargada: string | null = null;

  /*onFileSelected(event: any) {

    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      
      reader.readAsDataURL(file);
      

      reader.onload = (e: any) => {
        const base64String = e.target.result;
        this.imagen = base64String;
        this.imagenCargada = reader.result as string;

        };
    }
  }*/
 

  constructor(
    private dialogoReferencia: MatDialogRef<DialogAgenciaComponent>,
    @Inject(MAT_DIALOG_DATA) public agenciaEditar: Agencia,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    //private _categoriaServicio: CategoriaService,
    private _agenciaServicio: AgenciaService
  ) {
    this.formAgencia = this.fb.group({
      Nombre: ['', Validators.required],
      Telefono: ['', Validators.required],
   

    })


    if (this.agenciaEditar) {

      this.accion = "Editar";
      this.accionBoton = "Actualizar";
    }

    /*this._categoriaServicio.getCategorias().subscribe({
      next: (data) => {

        if (data.status) {

          this.listaCategorias = data.value;

          if (this.productoEditar)
            this.formProducto.patchValue({
              idCategoria: this.productoEditar.idCategoria
            })

        }
      },
      error: (e) => {
      },
      complete: () => {
      }
    })*/

  }


  ngOnInit(): void {

    if (this.agenciaEditar) {
      console.log(this.agenciaEditar)
      this.formAgencia.patchValue({
        Nombre: this.agenciaEditar.Nombre,
        Telefono: String(this.agenciaEditar.Telefono),
        
      })
    }
  }

  agregarEditarAgencia() {
    const formData = new FormData(); // Crea un nuevo objeto FormData

    formData.append('Nombre', this.formAgencia.value.Nombre);
    formData.append('Telefono', this.formAgencia.value.Telefono.toString());
   
    

    /*if (this.productoEditar) {

      this._productoServicio.editdos(formData).subscribe({
        next: (data) => {

          if (data.status) {
            this.mostrarAlerta("El producto fue editado", "Exito");
            this.dialogoReferencia.close('editado')
          } else {
            this.mostrarAlerta("No se pudo editar el producto", "Error");
          }

        },
        error: (e) => {
          console.log(e)
        },
        complete: () => {
        }
      })


    } else {

      this._productoServicio.savedos(formData).subscribe({
        next: (data) => {

          if (data.status) {
            this.mostrarAlerta("El producto fue registrado", "Exito");
            this.dialogoReferencia.close('agregado')
          } else {
            this.mostrarAlerta("No se pudo registrar el producto", "Error");
          }

        },
        error: (e) => {
        },
        complete: () => {
        }
      })


    }*/
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
