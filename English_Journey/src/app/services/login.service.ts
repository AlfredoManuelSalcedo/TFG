import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LessonsEstructure } from '../models/lessons-estructure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLessonsContent():Observable<LessonsEstructure>{
    return this.http.get<LessonsEstructure>("../assets/lessons.json")
  }
}
