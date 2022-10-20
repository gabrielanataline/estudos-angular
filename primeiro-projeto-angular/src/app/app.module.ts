import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

@NgModule({

    /**
   * declarations serve para registrar
   * componentes, pipes, diretivas e outras estruturas
   */

  declarations: [
    AppComponent,
    ProdutoComponent,
    NavbarComponent,
    CreditCardComponent
  ],

    /**
   * imports serve para registrar outros módulos dentro
   * de outro módulo
   *
   * SERVE EXCLUSIVAMENTE PARA OUTROS MÓDULOS
   */
  imports: [
    BrowserModule
  ],

    /**
   * providers serve para registrar serviços e interceptadores
   * HTTP
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
