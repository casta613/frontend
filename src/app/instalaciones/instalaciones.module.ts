import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstalacionesRoutingModule } from './instalaciones-routing.module';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    InstalacionesRoutingModule,
    SharedModule
  ]
})
export class InstalacionesModule { }
