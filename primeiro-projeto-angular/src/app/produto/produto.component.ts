/** todo componente no angular, é representado por uma classe */

import { Component } from "@angular/core";



@Component({
    selector: 'card-produto',  //para utlizar essa tag no html
    templateUrl: './produto.component.html',  //referenciar arquivo html
    styleUrls:  ['./produto.component.css']  //informar qual o arquivo css, precisa ser um array
})
export class ProdutoComponent {  //produto é o nome do componente


}