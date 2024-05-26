import { Component, OnInit } from '@angular/core';
import { Grammar, Lesson } from '../../../models/lessons-estructure';
import { LoginService } from '../../../services/login.service';
import { UserDataService } from '../../../services/user-data.service';
import { Router } from '@angular/router';
import { ConexionService } from '../../../services/API/conexion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent implements OnInit{
  constructor(private appService:LoginService, private userDataService: UserDataService, private router:Router, private conexion:ConexionService){}
  nombre= '';
  tipos: any[] = [];
  ngOnInit(): void {
    const userData = this.userDataService.getUserData();
    if (userData) {
      this.nombre = userData.data.nombre;
    } 
    this.conexion.getLessonsTypes().subscribe(tipos => {
      this.tipos=tipos;
      this.tipos.forEach(tipo => {
        this.conexion.getLessonsByType(tipo.tipo_curso).subscribe(lecciones => {
          tipo.lecciones = lecciones;
        });
      });
    });
  }

  
  // getLessons():Lesson[]{
  //   let AsigaturesList : Lesson[]=[] 
  //   this.appService.getLessonsContent().subscribe(data=>{
  //     data.lessons.forEach(type => {AsigaturesList.push(type)})
  //   })
  //   console.log(AsigaturesList)
  //   return AsigaturesList;
  // }

}
