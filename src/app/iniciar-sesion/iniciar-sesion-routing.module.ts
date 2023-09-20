import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/Login/login.component';
import { AgenciaComponent } from '../agencia/paginas/agencias/agencia.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'agencia', component: AgenciaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IniciarSesionRoutingModule { }
