import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public cliente:Cliente = {} as Cliente

  public clientes:Cliente[] = [
    { id: 1, nome: "Leonardo", telefone: 11944448888, endereco: "Rua teste 321", data: new Date(), valor: 22.76, cpf: 55544433321},
    { id: 2, nome: "Asdrubal", telefone: 11943348888, endereco: "Rua av 123", data: new Date(), valor: 4700, cpf: 88877711123},
    { id: 3, nome: "Catalista", telefone: 11912428888, endereco: "Rua florida 456", data: new Date(), valor: 2387.90, cpf: 95135748621}
  ]

  ngOnInit(): void {
    //this.cliente = this.clientes[0]
  }

  clicou(){
    let id = this.clientes.length + 1
    let novoCliente: Cliente = {
      id: id,
      nome: this.cliente.nome,
      telefone: this.cliente.telefone,
      endereco: this.cliente.endereco,
      data: new Date(),
      valor: this.cliente.valor,
      cpf: this.cliente.cpf
    } as Cliente

    this.clientes.push(novoCliente)
  }

}
