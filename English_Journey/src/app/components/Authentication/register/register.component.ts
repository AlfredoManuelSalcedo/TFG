import { Component, OnInit } from '@angular/core';
import { HeaderLoginComponent } from '../header-login/header-login.component';
import { FormControl, ReactiveFormsModule, Validators, FormGroupDirective,NgForm,FormsModule,FormGroup } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegisterModalComponent } from '../../modals/register-modal/register-modal.component';
import { ConexionService } from '../../../services/API/conexion.service';
import { UserExistModalComponent } from '../../modals/user-exist-modal/user-exist-modal.component';
import { ErrorRegisterModalComponent } from '../../modals/error-register-modal/error-register-modal.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderLoginComponent, ReactiveFormsModule, RouterLink, RouterOutlet,FormsModule,MatFormFieldModule,MatInputModule, MatDialogModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  datos: any[]=[];
  query = "SELECT * FROM usuarios";
  querys = "SELECT * FROM usuarios WHERE user_id =1";
  constructor(public dialog: MatDialog, private conexionsql: ConexionService){}

  ngOnInit(): void {
    
  }
  openDialog(status:number){
    if(status==201){
      this.dialog.open(RegisterModalComponent, {  });
    }else if(status==200){
      this.dialog.open(UserExistModalComponent, {  });
    }else{
      this.dialog.open(ErrorRegisterModalComponent, {  });
    }

  }

  registerform = new FormGroup({
    nombre : new FormControl('',Validators.required),
    mail : new FormControl('',[Validators.email, Validators.required]),
    password : new FormControl('',Validators.required)
   })

 emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 passwordFormControl = new FormControl('', Validators.required);
 nameFormControl = new FormControl('', Validators.required )

 matcher = new MyErrorStateMatcher();

 registro(){
  const userData = this.registerform.value;
  this.conexionsql.getPruebaMail(userData).subscribe(data=>{
    this.datos=data;
    console.log(this.datos);
    console.log(data.status);
    this.openDialog(data.status);
  })
 }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}