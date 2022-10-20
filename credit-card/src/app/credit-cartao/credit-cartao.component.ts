import { Component, Input, OnInit } from '@angular/core';
import { CartaodeCredito } from '../interfaces/CartaodeCredito';

@Component({
  selector: 'app-credit-cartao',
  templateUrl: './credit-cartao.component.html',
  styleUrls: ['./credit-cartao.component.css']
})
export class CreditCartaoComponent implements OnInit {

  /**
   * O angular vai entender que a propriedade 'dadosCartao'
   * poderá receber valores externos ao componente, ou seja,
   * eu estando em outro componente conseguirei mudar o valor
   * da propriedade 'dadosCartao'
   */
  @Input() 
  dadosCartao: CartaodeCredito ={
    ano: '40',
    mes: '06',
    cvc: '123',
    nome: 'Gabriela N',
    numero: '2314 2432 3432 3224'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
