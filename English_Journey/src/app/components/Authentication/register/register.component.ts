import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(){}
  registerform = new FormGroup({
   nombre : new FormControl('',Validators.required),
   mail : new FormControl('',[Validators.email, Validators.required]),
   password : new FormControl('',Validators.required)
  })
}
