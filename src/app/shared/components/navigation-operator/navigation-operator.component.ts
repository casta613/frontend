import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-operator',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationOperatorComponent {
  public active: boolean = false; //esta bandera es para desplegar menu
  rol:string = '';
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
    this.rol= String(sessionStorage.getItem('rol'));
  }

  setActive() : void {
      this.active = !this.active
  }

  cerrarSesion(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
