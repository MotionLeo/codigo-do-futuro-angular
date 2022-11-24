import { Component, OnInit } from '@angular/core';
import { CarrinhoDeProdutos } from 'src/app/models/CarrinhoDeProdutos';
import { CarrinhoServico } from 'src/app/servicos/carrinhoDeProdutos';

@Component({
  selector: 'app-lista-carrinho',
  templateUrl: './lista-carrinho.component.html',
  styleUrls: ['./lista-carrinho.component.css']
})
export class ListaCarrinhoComponent implements OnInit {

  //public carrinho : CarrinhoDeProdutos = CarrinhoServico.get();

  constructor() { }

  ngOnInit(): void {
  }

  excluirItem(item : Number){
    console.log(item);
  }
}
