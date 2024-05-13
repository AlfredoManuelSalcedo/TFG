import { Component, OnInit } from '@angular/core';
import { Grammar, Lesson } from '../../../models/lessons-estructure';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent implements OnInit{
  constructor(private appService:LoginService){}
  ngOnInit(): void {
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

}
