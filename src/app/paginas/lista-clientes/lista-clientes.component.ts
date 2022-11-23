import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteCarrinho } from 'src/app/models/clienteCarrinho';
import { ClienteCarrinhoServico } from 'src/app/servicos/clienteCarrinhoServico';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';
import { CarrinhoServico } from 'src/app/servicos/carrinhoDeProdutos';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(
    private router:Router,
    private clienteObserverServicoService: ClienteObserverServicoService
  ) { }

  ngOnInit(): void {
  }
  
  public clientes:ClienteCarrinho[] = ClienteCarrinhoServico.getClientes();

  novoCliente(){
    this.router.navigateByUrl("/cliente-carrinho");
  }

  excluirCliente(cliente:ClienteCarrinho){
    ClienteCarrinhoServico.deleteCliente(cliente);
    this.clientes = ClienteCarrinhoServico.getClientes();
    this.clienteObserverServicoService.atualizaQuantidade();
  }
  clienteNoCarrinho(){
    CarrinhoServico.get().idCliente = 1
  }
}
