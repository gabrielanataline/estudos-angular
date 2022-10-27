import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprimento'
})
export class ComprimentoPipe implements PipeTransform {

  // Pegar um Array qualquer e retornar a quantidade de elementos dentro dele!

  //Value => parâmentro resposável por pegar o valor que será transformado
  //args:  

  // o parametro 'value'no metodo transform é obrigatório, mas caso queira passar outros parâmetros, isso é possível

  transform(value: any[]): number {
    return value.length;
  }

}
