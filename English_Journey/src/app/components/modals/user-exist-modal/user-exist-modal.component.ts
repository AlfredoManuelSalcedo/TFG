import { Component } from '@angular/core';
import{MatDialogModule} from '@angular/material/dialog'
import { RouterLink } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-exist-modal',
  standalone: true,
  imports: [MatDialogModule, RouterLink],
  templateUrl: './user-exist-modal.component.html',
  styleUrl: './user-exist-modal.component.scss'
})
export class UserExistModalComponent {
  constructor(private dialogRef: MatDialogRef<UserExistModalComponent>, private router: Router) {}
  onClose() {
    this.dialogRef.close();
  }

  onVolver() {
    this.onClose(); 
    this.router.navigateByUrl('/auth/login'); 
  }
}

