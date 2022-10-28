import { Injectable } from '@angular/core';

/**
 *  providedIn informa aonde o serviço sera fornecido...
 */

/**
 * A ideia de um serviço no angular, é encapsular alguma lógica que pode ser
 * utilizada em vários locais da sua aplicação
 */

interface Cliente {
  nome: string
  sobrenome: string
  telefone: string
  id: number
  email: string
  cpf: string
}

/**
 *  C > Create
 *  R > Read
 *  U > Update
 *  D > Delete
 */

@Injectable({
  providedIn: 'root'      // posso usar esse serviço em qualquer parte do meu código
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '11111111111',
      email: 'frealves@gmail.com',
      telefone: '40028922',
      id: 1
    },
    {
      nome: 'José',
      sobrenome: 'Almir',
      cpf: '22222222222',
      email: 'jose.almir@soulcodeacademy.org',
      telefone: '40028922',
      id: 2
    },
    {
      nome: 'Renato',
      sobrenome: 'Pereira',
      cpf: '33333333333',
      email: 'renato.pereira@soulcodeacademy.org',
      telefone: '40028922',
      id: 3
    }
  ]

  constructor() { }

  listarClientes(): Cliente[] {
    //toda a lógica pra acessar a api e pegar os dados
    return this.clientes
}

  listarClientesPeloId(id:number): Cliente | undefined{
    // o método find() dos arrays, serve para procurar alguma valor dentro do array
   // é necessário para uma função para o find(), e retornará um valor booleano

   // faz um laço de repetição
     const ClienteEncontrado = this.clientes.find((c) => {
      c.id == id
    })
    return ClienteEncontrado

  }
}
