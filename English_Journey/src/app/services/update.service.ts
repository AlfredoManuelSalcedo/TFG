import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private userSeleccionado: any = null;

  constructor() { }

  setUserSeleccionado(user: any): void {
    this.userSeleccionado = user;
  }

  getUserSeleccionado(): any {
    return this.userSeleccionado;
  }
}
