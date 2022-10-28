import { Component } from '@angular/core';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';

  constructor(         // utlizar serviço criado é necessário fazer uma invejção de independencias
    public cService : ClientesService
  ){}


  // ciclo de vida executado, quando o seu componente é redenrizado na tela
  ngOnInit(): void{
    const clientes = this.cService.listarClientes()
    console.log(clientes)

  }

}


