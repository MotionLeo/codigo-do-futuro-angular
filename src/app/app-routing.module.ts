import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './paginas/contact-list/contact-list.component';
import { FormClienteCarrinhoComponent } from './paginas/form-cliente-carrinho/form-cliente-carrinho.component';
import { FormProdutosCarrinhoComponent } from './paginas/form-produtos-carrinho/form-produtos-carrinho.component';
import { FormComponent } from './paginas/form/form.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListaClientesComponent } from './paginas/lista-clientes/lista-clientes.component';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos.component';
import { NaoEncontradaComponent } from './paginas/nao-encontrada/nao-encontrada.component';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';
import { SobreComponent } from './paginas/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'form', component: FormComponent },
  { path: 'form-alterar/:id', component: FormComponent },
  { path: 'contatos', component: ContactListComponent },
  { path: 'cliente-carrinho', component: FormClienteCarrinhoComponent },
  { path: 'cliente-carrinho/:id', component: FormClienteCarrinhoComponent },
  { path: 'consulta-cliente-carrinho', component: ListaClientesComponent },
  { path: 'produto-carrinho', component: FormProdutosCarrinhoComponent },
  { path: 'produto-carrinho/:id', component: FormProdutosCarrinhoComponent },
  { path: 'consulta-produto-carrinho', component: ListaProdutosComponent },
  { path: '**', component: NaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
