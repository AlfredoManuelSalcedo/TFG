import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private api_url = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }
  
  getDatos(): Observable<any>{
    return this.http.get<any>(`${this.api_url}/datos`);
  }
  getUsuarioById(id: number): Observable<any>{
    return this.http.get<any>(`${this.api_url}/usuario/${id}`);
  }
  getRegister(datos: any): Observable<any>{
    return this.http.get<any>(`${this.api_url}/register/${encodeURIComponent(JSON.stringify(datos))}`);
  }
  getLogin(datos: any): Observable<any>{
    return this.http.get<any>(`${this.api_url}/login/${encodeURIComponent(JSON.stringify(datos))}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  getLessonsTypes(): Observable<any[]>{
    return this.http.get<any[]>(`${this.api_url}/lessonsTypes`);
  }

  getLessonsByType(datos: String):Observable<any[]>{
    return this.http.get<any>(`${this.api_url}/lessonsByType/${encodeURIComponent(JSON.stringify(datos))}`);
  }

  getAdminLogin(datos: any): Observable<any>{
    return this.http.get<any>(`${this.api_url}/adminLogin/${encodeURIComponent(JSON.stringify(datos))}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.api_url}/datos/${userId}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.api_url}/datos/${user.user_id}`, user);
  }
}
