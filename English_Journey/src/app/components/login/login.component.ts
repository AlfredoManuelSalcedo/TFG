import { Component } from '@angular/core';
import { HeaderLoginComponent } from '../header-login/header-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderLoginComponent,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
