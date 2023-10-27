import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservacionComponent } from './paginas/resevacion/reservacion.component';

const routes: Routes = [
  {
    path: '',
    component: ReservacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservacionesRoutingModule { }
