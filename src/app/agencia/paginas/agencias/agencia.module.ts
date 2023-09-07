import { NgModule } from "@angular/core";
import { AgenciaComponent } from "./agencia.component";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from '@angular/common/http';



@NgModule({
    declarations: [AgenciaComponent],
    imports: [CommonModule,HttpClientModule],
})
export class AgenciaModule{}


