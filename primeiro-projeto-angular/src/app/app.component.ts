import { Component } from '@angular/core';


/**
 * templateUrl - informa ao componente qual arquivo html ele deve mostrar
 *  quando o mesmo ser utilizado!
 * 
 * styleUrls 'serve para informar os caminhos dos arquivos CSS
 *  que o componente utilizará
 * 
 * selector 'serve para informar como aquele componente poderá ser chamado 
 * dentro do projeto Angular dentro de outros arquivos HTML de outros 
 * componentes
 */
@Component({  //decorater, fara que o componente seja uma class no angular
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'primeiro-projeto-angular';
}
