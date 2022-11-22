import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';
import { ProdutoCarrinhoServico } from 'src/app/servicos/produtosCarrinhoServico';

@Component({
  selector: 'app-form-produtos-carrinho',
  templateUrl: './form-produtos-carrinho.component.html',
  styleUrls: ['./form-produtos-carrinho.component.css']
})
export class FormProdutosCarrinhoComponent implements OnInit {

  constructor(
    private router:Router,
    private routerParams: ActivatedRoute,
    private clienteObserverServicoService: ClienteObserverServicoService
  ) { }

  public titulo:String = "Novo produto"
  public produto:Produto = {} as Produto
  public preco:String = ""

  ngOnInit(): void {
    let id:Number = this.routerParams.snapshot.params['id']
    if(id){
      this.titulo = "Alterando produto"
      this.produto = ProdutoCarrinhoServico.buscaProdutoPorId(id)
    }
  }

  salvar(){
    if(this.produto.id > 0){
      ProdutoCarrinhoServico.setProdutos(this.produto)
    }
    else{
      ProdutoCarrinhoServico.setProdutos({
        id: 0,
        nomeProduto: this.produto.nomeProduto,
        descricaoProduto: this.produto.descricaoProduto,
        precoProduto: this.convertNumber(this.preco),
      });
    }

    this.clienteObserverServicoService.atualizaQuantidade();
    this.router.navigateByUrl("/consulta-produto-carrinho")
  }

  private convertNumber(preco:String): Number{
    let precoMatch = preco.match(/\d|\.|,/g)
    if(precoMatch == null) return 0
    let precoBrasileiro = precoMatch.join("")
    let precoAmericano = precoBrasileiro.replace(".", "").replace(",", ".")
    return Number(precoAmericano)
  }

  somenteNumero(){
    let precoMatch = this.preco.match(/\d|\.|,/g)
    if(precoMatch == null){
      this.preco = ""
      return
    }

    this.preco = precoMatch.join("")
  }

  marcara(){
    let precoFloat = Number(this.preco)
    this.preco = precoFloat.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
}
