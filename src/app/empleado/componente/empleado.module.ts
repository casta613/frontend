import { NgModule } from "@angular/core";
import { EmpleadoComponent } from "./empleado.component";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
    declarations: [EmpleadoComponent],
    imports: [CommonModule,HttpClientModule,MatPaginatorModule],
})
export class EmpleadoModule{}


