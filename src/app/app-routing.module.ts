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
  },
  {
    path: 'agencia',
    loadChildren: () => import('./agencia/agencias.module').then(m =>m.AgenciasModule) //ruta agencia
  },
  {
    path: 'conocenos',
    loadChildren: () => import('./conocenos/conocenos.module').then(m => m.ConocenosModule) // ruta conocenos
  },
  {
    path: 'instalaciones',
    loadChildren: () => import('./instalaciones/instalaciones.module').then(m => m.InstalacionesModule) //ruta instalaciones
  },
  {
    path: 'contactanos',
    loadChildren: () => import ('./contactanos/contactanos.module').then(m => m.ContactanosModule)//ruta contactacnos
  },
  {
    path: 'habitaciones',
    loadChildren: () => import('./habitaciones/habitaciones.module').then(m => m.HabitacionesModule) //ruta habitaciones
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
