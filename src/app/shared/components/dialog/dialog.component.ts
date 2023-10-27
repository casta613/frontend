import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  list: any = {}; 
  pokemon:string='';
  pokemonName:string='';
  Estatus:string=''
  constructor(
    private dialogoReferencia: MatDialogRef<DialogComponent>,
    private _apiServicio: ApiService,
    @Inject(MAT_DIALOG_DATA) public Estado: string,

  ){

  }
  ngOnInit(): void {

    if(this.Estado){
      this.Estatus = this.Estado
    }
    this.get();
  } 
  get(){

    this._apiServicio.get().subscribe({
      next:(data: any)=>{
        console.log(data)
        this.list = data;
         this.pokemon = this.list.sprites.front_default; 
         this.pokemonName= this.list.name;    
         console.log(this.pokemon);
      }
    })
  }

  aceptar() {
    this.dialogoReferencia.close(); 
  }
}
