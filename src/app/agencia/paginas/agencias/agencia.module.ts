import { NgModule } from "@angular/core";
import { AgenciaComponent } from "./agencia.component";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
    declarations: [AgenciaComponent],
    imports: [CommonModule,HttpClientModule,MatPaginatorModule],
})
export class AgenciaModule{}


