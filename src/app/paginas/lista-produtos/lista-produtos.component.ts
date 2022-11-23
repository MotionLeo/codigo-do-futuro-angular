import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { CarrinhoServico } from 'src/app/servicos/carrinhoDeProdutos';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';
import { ProdutoCarrinhoServico } from 'src/app/servicos/produtosCarrinhoServico';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  constructor(
    private router:Router,
    private clienteObserverServicoService: ClienteObserverServicoService
  ) { }

  ngOnInit(): void {
  }
  
  public produtos:Produto[] = ProdutoCarrinhoServico.getProdutos();

  novoProduto(){
    
    this.router.navigateByUrl("/produto-carrinho");
  }

  excluirProduto(cliente:Produto){
    ProdutoCarrinhoServico.deleteProduto(cliente);
    this.produtos = ProdutoCarrinhoServico.getProdutos();
    this.clienteObserverServicoService.atualizaQuantidade();
  }

  adicionarNoCarrinho(produto : Produto){
    CarrinhoServico.get().itens.push(produto);
  }
}
