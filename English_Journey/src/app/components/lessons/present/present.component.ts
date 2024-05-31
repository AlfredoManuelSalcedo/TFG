import { Component } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {FormControl,FormBuilder} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-present',
  standalone: true,
  imports: [MatStepperModule,MatRadioModule,RouterLink],
  templateUrl: './present.component.html',
  styleUrl: './present.component.scss'
})
export class PresentComponent {

}
