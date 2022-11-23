import { CarrinhoDeProdutos } from "../models/CarrinhoDeProdutos";

export class CarrinhoServico{
    private static carrinhoDeProdutos: CarrinhoDeProdutos;

    public static get(){
        if(! CarrinhoServico.carrinhoDeProdutos )  CarrinhoServico.carrinhoDeProdutos = new CarrinhoDeProdutos();
        return CarrinhoServico.carrinhoDeProdutos
    }
}