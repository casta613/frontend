import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import {Login} from "../../../interface/login";
import {AccesoService} from "../../../services/acceso.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form: FormGroup = this.fb.group({
        usuario: [''],
        contraseña: [''],
    })

    constructor( private fb: FormBuilder,
        private _accesoService: AccesoService,
        private router: Router
        ){}
    Submit(){
        console.log(this.form.value);
    }
    ngOnInit(): void {
        
    }

    acceder(){
        const _acceder: Login = {
            Usuario: this.form.value.usuario,
            Contrasenia: this.form.value.contraseña,
            
          }
          this._accesoService.post(_acceder).subscribe({
            next: (data) => {
    
              
                console.log(data);
                if(data.Token){
                    sessionStorage.setItem('token', data.Token);
                    this.navegarAInicio();
                }
                    
            },
            error: (e) => {
            },
            complete: () => {
            }
        })
    }
    navegarAInicio() {
        this.router.navigate(['/agencia']); // Cambia la ruta a '/inicio'
      }
}