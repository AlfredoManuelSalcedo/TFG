import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-home-bar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,MatSidenavModule,MatListModule,MatButtonModule],
  templateUrl: './home-bar.component.html',
  styleUrl: './home-bar.component.scss'
})
export class HomeBarComponent {

}
