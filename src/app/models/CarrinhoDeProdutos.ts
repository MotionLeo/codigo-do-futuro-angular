import { Produto } from "./produto";

export class CarrinhoDeProdutos{
    public id: Number = 0;
    public idCliente: Number = 0;
    public itens : Produto[] = [];
    public dataDoPedido: Date = new Date();
}