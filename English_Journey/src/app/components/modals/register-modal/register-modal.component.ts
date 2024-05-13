import { Component } from '@angular/core';
import{MatDialogModule} from '@angular/material/dialog'
import { RouterLink } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [MatDialogModule, RouterLink],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss'
})
export class RegisterModalComponent {
  constructor(private dialogRef: MatDialogRef<RegisterModalComponent>, private router: Router) {}

  onClose() {
    this.dialogRef.close();
  }

  onVolver() {
    this.onClose(); 
    this.router.navigateByUrl('/auth/login'); 
  }
}
