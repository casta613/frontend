import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposhComponent } from './componentes/tiposh/tiposh.component';

const routes: Routes = [
  {
    path: '',
    component: TiposhComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConocenosRoutingModule { }
