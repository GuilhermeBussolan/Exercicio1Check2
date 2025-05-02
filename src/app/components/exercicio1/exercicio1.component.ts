import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio1',
  imports: [FormsModule],
  templateUrl: './exercicio1.component.html',
  styleUrl: './exercicio1.component.css'
})
export class Exercicio1Component {
  numero:number = 12;
}
