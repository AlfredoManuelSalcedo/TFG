import { Component } from '@angular/core';
import{MatDialogModule} from '@angular/material/dialog'
import { RouterLink } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-error-login',
  standalone: true,
  imports: [MatDialogModule, RouterLink],
  templateUrl: './error-login.component.html',
  styleUrl: './error-login.component.scss'
})
export class ErrorLoginComponent {
  constructor(private dialogRef: MatDialogRef<ErrorLoginComponent>, private router: Router) {}
  onClose() {
    this.dialogRef.close();
  }

  onVolver() {
    this.onClose(); 
    this.router.navigateByUrl('/auth/login'); 
  }
}
