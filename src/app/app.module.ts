import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import ptBr from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormComponent } from './paginas/form/form.component';
import { HomeComponent } from './paginas/home/home.component';
import { FormatarTelefonePipe } from './pipes/formatar-telefone.pipe';
import { ContactListComponent } from './paginas/contact-list/contact-list.component';
import { ClientesNotificacaoComponent } from './componentes/clientes-notificacao/clientes-notificacao.component';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { NaoEncontradaComponent } from './paginas/nao-encontrada/nao-encontrada.component';
import { FormClienteCarrinhoComponent } from './paginas/form-cliente-carrinho/form-cliente-carrinho.component';
import { ListaClientesComponent } from './paginas/lista-clientes/lista-clientes.component';
import { FormProdutosCarrinhoComponent } from './paginas/form-produtos-carrinho/form-produtos-carrinho.component';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos.component';
import { ListaCarrinhoComponent } from './paginas/lista-carrinho/lista-carrinho.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormatarTelefonePipe,
    FormComponent,
    ContactListComponent,
    ClientesNotificacaoComponent,
    PortfolioComponent,
    SobreComponent,
    NaoEncontradaComponent,
    FormClienteCarrinhoComponent,
    ListaClientesComponent,
    FormProdutosCarrinhoComponent,
    ListaProdutosComponent,
    ListaCarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
