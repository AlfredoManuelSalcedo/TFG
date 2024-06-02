import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../../../services/update.service';
import { ConexionService } from '../../../services/API/conexion.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user: any;

  constructor(private updateS: UpdateService, private conexionsql: ConexionService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.updateS.getUserSeleccionado();
    console.log(this.user)
  }

  actualizarUsuario(): void {
    this.conexionsql.updateUser(this.user).subscribe(
      response => {
        console.log('Usuario actualizado:', response);
        this.router.navigate(['/EnglishJourney/admin']);
      },
      error => {
        console.error('Error al actualizar usuario:', error);
        
      }
    );
  }
}