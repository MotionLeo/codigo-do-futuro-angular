import { Produto } from "./produto";

export class CarrinhoDeProdutos{
    public id: Number = 0;
    public idCliente: Number;
    public itens : Produto[] = [];
    public dataDoPedido: Date = new Date();

    constructor(idCliente:Number){
        this.idCliente = idCliente;
    }
}