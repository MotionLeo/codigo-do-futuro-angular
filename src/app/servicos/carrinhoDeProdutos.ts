import { CarrinhoDeProdutos } from "../models/CarrinhoDeProdutos";

export class CarrinhoServico{
    private static carrinhoDeProdutos: CarrinhoDeProdutos;

    public static criarCarrinho(idCliente : Number){
        CarrinhoServico.carrinhoDeProdutos = new CarrinhoDeProdutos(idCliente);
    }
    public static getCarrinho(){
        return CarrinhoServico.carrinhoDeProdutos
    }
}