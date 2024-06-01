import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-vuseful',
  standalone: true,
  imports: [MatStepperModule, MatRadioModule, RouterLink, FormsModule, MatProgressSpinnerModule],
  templateUrl: './vuseful.component.html',
  styleUrl: './vuseful.component.scss'
})
export class VUsefulComponent {
  respuestaSeleccionadas: string[] = new Array(5).fill('');
  respuestasCorrectas: string[] = ['1_resp_1', '2_resp_3', '3_resp_2', '4_resp_4', '5_resp_1'];
  valueSpinner: number = 0;
  mensaje: string = '';

  correctas(): number {
    let numCorrectas: number = 0;
    this.respuestaSeleccionadas.forEach((respuesta, numPregunta) => {
      if (respuesta === this.respuestasCorrectas[numPregunta]) {
        numCorrectas++;
      }
    });
    return numCorrectas;
  }

  porcentajeCorrectas(nCorrectas: number): number {
    return (nCorrectas / this.respuestasCorrectas.length) * 100;
  }

  animarProgressBar(): void {
    const porcentajeFinal = this.porcentajeCorrectas(this.correctas());
    const incremento = porcentajeFinal / 100;
    const interval = setInterval(() => {
      if (this.valueSpinner < porcentajeFinal) {
        this.valueSpinner += incremento;
      } else {
        this.valueSpinner = porcentajeFinal;
        clearInterval(interval);
      }
    }, 10);
  }

  mostrarMensaje(nCorrectas: number): void {
    if (nCorrectas < this.respuestasCorrectas.length / 2) {
      this.mensaje = '¡No te desanimes! Sigue practicando y mejorando.';
    } else {
      this.mensaje = '¡Enhorabuena! Estás haciendo un gran trabajo.';
    }
  }

  resultados(): void {
    const nCorrectas = this.correctas();
    this.animarProgressBar();
    this.mostrarMensaje(nCorrectas);
  }
}
