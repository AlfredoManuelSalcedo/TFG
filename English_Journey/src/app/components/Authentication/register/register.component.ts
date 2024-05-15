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

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderLoginComponent, ReactiveFormsModule, RouterLink, RouterOutlet,FormsModule,MatFormFieldModule,MatInputModule, MatDialogModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  datos: any[]=[];
  constructor(public dialog: MatDialog, private conexionsql: ConexionService){}

  ngOnInit(): void {
    this.conexionsql.getDatos().subscribe(data=>{
      this.datos=data;
    })
    console.log(this.datos)
  }
  
  openDialog(): void {
    this.dialog.open(RegisterModalComponent, {  });
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
  console.log("hola")
 }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}