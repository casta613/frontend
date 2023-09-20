import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConocenosRoutingModule } from './conocenos-routing.module';
import { TiposhComponent } from './componentes/tiposh/tiposh.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
       TiposhComponent
  ],
  imports: [
    CommonModule,
    ConocenosRoutingModule,
    SharedModule
  ]
})
export class ConocenosModule { }
