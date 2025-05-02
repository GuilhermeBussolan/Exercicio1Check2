import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio8',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exercicio8.component.html',
  styleUrl: './exercicio8.component.css'
})
export class Exercicio8Component {
  email: string = '';
  senha: string = '';
  mensagem: string = '';
  enviado: boolean = false;

  validarLogin() {
    this.enviado = true;

    if (!this.email || !this.senha) {
      this.mensagem = 'Campos obrigatórios!';
    } else if (!this.email.includes('@') || this.senha.length < 6) {
      this.mensagem = 'Credenciais inválidas!';
    } else if (this.email === 'user@teste.com' && this.senha === '123456') {
      this.mensagem = 'Login bem-sucedido!';
    } else {
      this.mensagem = 'Credenciais inválidas!';
    }
  }
}
