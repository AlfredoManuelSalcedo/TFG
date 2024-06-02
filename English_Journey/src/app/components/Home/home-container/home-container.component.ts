import { Component, OnInit } from '@angular/core';
import { Grammar, Lesson } from '../../../models/lessons-estructure';
import { UserDataService } from '../../../services/user-data.service';
import { Router } from '@angular/router';
import { ConexionService } from '../../../services/API/conexion.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  nombre = '';
  tipos: any[] = [];
  activeLesson: any = null;

  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private conexion: ConexionService
  ) {}

  ngOnInit(): void {
    const userData = this.userDataService.getUserData();
    if (userData) {
      this.nombre = userData.data.nombre;
    }
    this.conexion.getLessonsTypes().subscribe(tipos => {
      this.tipos = tipos;
      this.tipos.forEach(tipo => {
        this.conexion.getLessonsByType(tipo.tipo_curso).subscribe(lecciones => {
          tipo.lecciones = lecciones;
        });
      });
    });
  }

  setActiveLesson(leccion: any): void {
    this.activeLesson = leccion;
  }

  clearActiveLesson(): void {
    this.activeLesson = null;
  }

  trackByFn(index: number, item: any): any {
    return item ? item.id : index;
  }

  getAssetPath(imageName: string): string {
    return `assets/home-images/${imageName}.png`;
  }

  getRouterLink(imageName: string): string {
    return `/EnglishJourney/${imageName}`;
  }

  getColorClass(index: number): string {
    const colors = ['color1', 'color2', 'color3', 'color4'];
    return index < 4 ? colors[index] : '';
  }
}
  
  // getLessons():Lesson[]{
  //   let AsigaturesList : Lesson[]=[] 
  //   this.appService.getLessonsContent().subscribe(data=>{
  //     data.lessons.forEach(type => {AsigaturesList.push(type)})
  //   })
  //   console.log(AsigaturesList)
  //   return AsigaturesList;
  // }

