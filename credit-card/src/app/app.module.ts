import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreditCartaoComponent } from './credit-cartao/credit-cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCartaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   //inserir FormsModule manipulação de formulários dentro do Angular

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
