import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio10',
  imports: [FormsModule],
  templateUrl: './exercicio10.component.html',
  styleUrl: './exercicio10.component.css'
})
export class Exercicio10Component {
  valor1: number = 0;
  valor2: number = 0;
  operacao: string = 'soma';
  resultado: number | string | null = null;

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.valor1 + this.valor2;
        break;
      case 'subtracao':
        this.resultado = this.valor1 - this.valor2;
        break;
      case 'multiplicacao':
        this.resultado = this.valor1 * this.valor2;
        break;
      case 'divisao':
        if (this.valor2 === 0) {
          this.resultado = 'Erro: divisão por zero!';
        } else {
          this.resultado = this.valor1 / this.valor2;
        }
        break;
      default:
        this.resultado = null;
    }
  }
} 
