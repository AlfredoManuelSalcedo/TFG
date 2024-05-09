import {Component} from '@angular/core';
import { HomeBarComponent } from '../home-bar/home-bar.component';
import { HomeContainerComponent } from '../home-container/home-container.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [HomeBarComponent,RouterOutlet,HomeContainerComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent {

}
