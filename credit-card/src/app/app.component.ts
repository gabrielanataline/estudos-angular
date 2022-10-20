import { Component } from '@angular/core';
import { CartaodeCredito } from './interfaces/CartaodeCredito';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetos-angular';

  formCartaodeCredito: CartaodeCredito = { // trazendo dados da interface criada 
  ano: '',
  cvc: '',
  mes: '',
  nome: '',
  numero: ''

  }
}
