import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  standalone: true,
  imports: [],
  templateUrl: './exercicio4.component.html',
  styleUrl: './exercicio4.component.css'
})
export class Exercicio4Component {
  tarefas = ["Estudar Angular", "Fazer exercicios", "Revisar código"]

  deletar(index: number) {
    this.tarefas.splice(index, 1);
  }
}
