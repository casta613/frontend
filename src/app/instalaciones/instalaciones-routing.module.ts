import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './paginas/galeria/galeria.component';

const routes: Routes = [
 {
   path: '',
   component: GaleriaComponent
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstalacionesRoutingModule { }
