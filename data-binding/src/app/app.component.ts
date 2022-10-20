import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {

  /**String Interpolation : utilizar valores que
   *  propriedades possuem, para mostrá-los
   *  para o usuário  {{ }} */


  /** property binding : utilizar valores de propriedades 
   * para atribui-los a atributos html [ ] */

  /** event binding : utilizado para ouvir eventos da Dom
   * dentro do Angular
  */

  /** two day data binding,dependendo o que o usuário digitar o site também muda  */
  title = 'ANGULAR É MUITO BOM!';

  n1: number = 0
  n2: number = 0
  tipoInput: string = "password"  //property binding

  somar(x: number, y:number){
    return x+y
  }

  mudarTipoDoInput() : void {
    if(this.tipoInput == 'password'){
      this.tipoInput = 'text'
    } else {
      this.tipoInput = 'password'
    }
  }
}
