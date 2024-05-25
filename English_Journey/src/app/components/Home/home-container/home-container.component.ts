import { Component, OnInit } from '@angular/core';
import { Grammar, Lesson } from '../../../models/lessons-estructure';
import { LoginService } from '../../../services/login.service';
import { UserDataService } from '../../../services/user-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent implements OnInit{
  constructor(private appService:LoginService, private userDataService: UserDataService, private router:Router){}
  nombre= '';
  ngOnInit(): void {
    const userData = this.userDataService.getUserData();
    if (userData) {
      this.nombre = userData.data.nombre;
    } 
    this.getLessons();
  }
  getLessons():Lesson[]{
    let AsigaturesList : Lesson[]=[] 
    this.appService.getLessonsContent().subscribe(data=>{
      data.lessons.forEach(type => {AsigaturesList.push(type)})
    })
    console.log(AsigaturesList)
    return AsigaturesList;
  }

  // logout() {
  //   this.userDataService.clearUserData();
  //   this.router.navigate(['/login']);
  // }
}
