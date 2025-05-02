import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicio7.component.html',
  styleUrl: './exercicio7.component.css'
})
export class Exercicio7Component {
  valor: number | string = 1;

}
