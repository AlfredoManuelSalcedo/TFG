import { Component } from '@angular/core';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormGroupDirective,NgForm,FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderLoginComponent, ReactiveFormsModule, RouterLink, RouterOutlet,FormsModule,MatFormFieldModule,MatInputModule,],
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

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 passwordFormControl = new FormControl('', Validators.required);
 nameFormControl = new FormControl('', Validators.required )

 matcher = new MyErrorStateMatcher();
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
