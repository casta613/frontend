import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IniciarSesionRoutingModule } from './iniciar-sesion-routing.module';
import { LoginComponent } from './componentes/Login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    IniciarSesionRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class IniciarSesionModule { }
