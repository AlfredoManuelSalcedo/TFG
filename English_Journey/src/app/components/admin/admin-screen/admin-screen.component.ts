import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../../services/API/conexion.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UpdateService } from '../../../services/update.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-screen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.scss'] 
})
export class AdminScreenComponent implements OnInit {
  users: any[] = [];
  userSeleccionado: any = null;

  constructor(private conexionsql: ConexionService, private router: Router, private updateS: UpdateService) {}

  ngOnInit(): void {
    this.conexionsql.getDatos().subscribe(
      (response) => {
        this.users = response.data; 
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  borrarUsuario(userId: number): void {
    this.conexionsql.deleteUser(userId).subscribe(
      response => {
        console.log('Usuario borrado:', response);

        this.users = this.users.filter(user => user.user_id !== userId);
      },
      error => {
        console.error('Error al borrar usuario:', error);
      }
    );
  }

  abrirFormularioActualizar(user: any): void {
    this.updateS.setUserSeleccionado(user);
    this.router.navigate(['/EnglishJourney/updateUser']);
  }



  actualizarLista(usuarioActualizado: any): void {
    this.users = this.users.map(user => user.user_id === usuarioActualizado.user_id ? usuarioActualizado : user);
  }
}