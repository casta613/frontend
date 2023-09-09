import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./bienvenida/bienvenida.module').then(m => m.BienvenidaModule) //ruta padre, carga peresosa
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./iniciar-sesion/iniciar-sesion.module').then(m =>m.IniciarSesionModule) //ruta inicio-sesion
  }
  ,
  {
    path: 'Habitaciones',
    loadChildren: () => import('./habitaciones/habitaciones.module').then(m =>m.HabitacionesModule) //ruta habitacion
  }
  ,
  {
    path: 'agencia',
    loadChildren: () => import('./agencia/agencias.module').then(m =>m.AgenciasModule) //ruta agencia
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
