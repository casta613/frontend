import { NgModule } from "@angular/core";
import { HabitacionesComponent} from "./habitaciones.component";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from '@angular/common/http';



@NgModule({
    declarations: [HabitacionesComponent],
    imports: [CommonModule,HttpClientModule],
})
export class AgenciaModule{}


