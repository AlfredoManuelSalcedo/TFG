import { Component } from '@angular/core';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormGroupDirective,NgForm,FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ConexionService } from '../../../services/API/conexion.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ErrorLoginComponent } from '../../modals/error-login/error-login.component';
import { UserDataService } from '../../../services/user-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderLoginComponent, ReactiveFormsModule, RouterLink, RouterOutlet,FormsModule,MatFormFieldModule,MatInputModule,MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 constructor(public dialog: MatDialog,private conexionsql: ConexionService, private router: Router, private userDataService: UserDataService){}
 loginform = new FormGroup({
  mail : new FormControl('',[Validators.email, Validators.required]),
  password : new FormControl('',Validators.required)
 })

 openDialog(status: number) {
  if (status == 500) {
    console.log("error 500");
    this.dialog.open(ErrorLoginComponent, {});
  } if (status == 200) {
    this.router.navigate(["/EnglishJourney/home"]);
  }
} 

 emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 passwordFormControl = new FormControl('', Validators.required);

 matcher = new MyErrorStateMatcher();
 login() {
  const userData = this.loginform.value;
  this.conexionsql.getLogin(userData).subscribe(
    data => {
      console.log(data);
      this.userDataService.setUserData(data);
      this.openDialog(data.status);
    },
    error => {
      console.error('Error during login:', error);
      this.openDialog(error.status);
    }
  );
}
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}