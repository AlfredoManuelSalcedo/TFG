import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private api_url = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }
  
  getDatos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.api_url}/datos`);
  }
  getUsuarioById(id: number): Observable<any>{
    return this.http.get<any>(`${this.api_url}/usuario/${id}`);
  }
  getPruebaMail(datos: any): Observable<any>{
    return this.http.get<any>(`${this.api_url}/register/${encodeURIComponent(JSON.stringify(datos))}`);
  }

}
