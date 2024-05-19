import { Component } from '@angular/core';
import{MatDialogModule} from '@angular/material/dialog'
import { RouterLink } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-error-register-modal',
  standalone: true,
  imports: [MatDialogModule, RouterLink],
  templateUrl: './error-register-modal.component.html',
  styleUrl: './error-register-modal.component.scss'
})
export class ErrorRegisterModalComponent {
  constructor(private dialogRef: MatDialogRef<ErrorRegisterModalComponent>, private router: Router) {}
  onClose() {
    this.dialogRef.close();
  }

  onVolver() {
    this.onClose(); 
    this.router.navigateByUrl('/auth/login'); 
  }
}
