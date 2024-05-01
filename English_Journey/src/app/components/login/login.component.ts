import { Component } from '@angular/core';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderLoginComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 constructor(){}
 loginform = new FormGroup({
  mail : new FormControl('',[Validators.email, Validators.required]),
  password : new FormControl('',Validators.required)
 })

 onSubmit(){
  console.log("hola")
 }
}
