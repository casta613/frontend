import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitacionesComponent } from './paginas/habitaciones/habitaciones.component';

const routes: Routes = [
  {
    path: '',
    component: HabitacionesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitacionesRoutingModule { }
