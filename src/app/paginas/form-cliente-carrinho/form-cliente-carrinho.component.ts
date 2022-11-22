import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteCarrinho } from 'src/app/models/clienteCarrinho';
import { ClienteCarrinhoServico } from 'src/app/servicos/clienteCarrinhoServico';
import { ClienteObserverServicoService } from 'src/app/servicos/clienteObserverServico.service';


@Component({
  selector: 'app-form-cliente-carrinho',
  templateUrl: './form-cliente-carrinho.component.html',
  styleUrls: ['./form-cliente-carrinho.component.css']
})
export class FormClienteCarrinhoComponent implements OnInit {

  constructor(
    private router:Router,
    private routerParams: ActivatedRoute,
    private clienteObserverServicoService: ClienteObserverServicoService
  ) { }

  public titulo:String = "Novo cliente"
  public cliente:ClienteCarrinho = {} as ClienteCarrinho

  ngOnInit(): void {
    let id:Number = this.routerParams.snapshot.params['id']
    if(id){
      this.titulo = "Alterando cliente"
      this.cliente = ClienteCarrinhoServico.buscaClientePorId(id)
    }
  }

  salvar(){
    if(this.cliente.id > 0){
      ClienteCarrinhoServico.setCliente(this.cliente)
    }
    else{
      ClienteCarrinhoServico.setCliente({
        id: 0,
        nome: this.cliente.nome,
      });
    }

    this.clienteObserverServicoService.atualizaQuantidade();
    this.router.navigateByUrl("/consulta-cliente-carrinho")
  }

}
