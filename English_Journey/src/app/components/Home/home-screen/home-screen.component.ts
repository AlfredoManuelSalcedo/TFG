import {Component, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { UserDataService } from '../../../services/user-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,MatSidenavModule,MatListModule,MatButtonModule,RouterOutlet],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent{

  constructor(private userDataService: UserDataService, private router: Router){}
   logout() {
     this.userDataService.clearUserData();
     this.router.navigate(['/auth/login']);
   }
}
