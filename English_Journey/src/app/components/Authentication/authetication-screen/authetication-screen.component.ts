import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLoginComponent } from '../header-login/header-login.component';

@Component({
  selector: 'app-authetication-screen',
  standalone: true,
  imports: [RouterOutlet, HeaderLoginComponent],
  templateUrl: './authetication-screen.component.html',
  styleUrl: './authetication-screen.component.scss'
})
export class AutheticationScreenComponent {

}
