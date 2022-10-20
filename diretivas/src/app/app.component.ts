import { Component } from '@angular/core';
import { Produto } from './Interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';

  // p: Produto ={
  //   nome: 'Xbox',
  //   descricao: 'Console da Microsoft',
  //   estoque: 250,
  //   preco: 4000,
  //   imagem: 'https://http2.mlstatic.com/D_NQ_NP_627914-MLA40655732617_022020-O.webp'

  // }
    nome: String = ''
    imagem: String= ''
    preco: number = 0
    estoque: number =0
    descricao: String = ''

    produtos: Produto [] = []


    //event binding
    adicionarProduto(evento:any): void {

      evento.preventDefault()
      //faz com que o comportamento padrão de um elemento  html seja anulado

      evento.stopPropagation ()
      //evita com que a emissão do evento afete outros elementos html
      this.produtos.push({
        descricao: this.descricao,
        estoque: this.estoque,
        imagem: this.imagem,
        nome: this.nome,
        preco: this.preco
     })

     this.nome = ""

  }
}
