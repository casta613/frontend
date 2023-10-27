import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import {NavigationOperatorComponent} from './components/navigation-operator/navigation-operator.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {DialogComponent} from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    NavigationOperatorComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    NavigationOperatorComponent,
    
  ]
})
export class SharedModule { }
