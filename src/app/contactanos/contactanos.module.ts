import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactanosRoutingModule } from './contactanos-routing.module';
import { ContactoHotelComponent } from './paginas/contacto-hotel/contacto-hotel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactoHotelComponent
  ],
  imports: [
    CommonModule,
    ContactanosRoutingModule,
    SharedModule
  ]
})
export class ContactanosModule { }
