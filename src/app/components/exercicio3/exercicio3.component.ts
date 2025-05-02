import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  imports: [],
  templateUrl: './exercicio3.component.html',
  styleUrl: './exercicio3.component.css'
})
export class Exercicio3Component {
  idade = 16;

  aumentar() {
    this.idade++;
  }

  diminuir() {
    this.idade--;
  }
}
