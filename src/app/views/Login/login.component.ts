import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";


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

    constructor( private fb: FormBuilder ){}
    Submit(){
        console.log(this.form.value);
    }
    ngOnInit(): void {
        
    }
}