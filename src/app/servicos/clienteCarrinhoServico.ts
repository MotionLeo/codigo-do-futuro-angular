import { ClienteCarrinho } from "../models/clienteCarrinho";

export class ClienteCarrinhoServico{

    private static clientes: ClienteCarrinho[] = []

    static buscaClientePorId(id: Number): ClienteCarrinho {
        let cliente:ClienteCarrinho = {} as ClienteCarrinho

        for(let i=0; i< ClienteCarrinhoServico.clientes.length; i++){
            let clienteDb = ClienteCarrinhoServico.clientes[i]
            if(clienteDb.id == id){
                cliente = clienteDb
                break
            }
        }

        return cliente;
    }


    public static getClientes():ClienteCarrinho[]{
        return ClienteCarrinhoServico.clientes
    }

    public static setCliente(cliente:ClienteCarrinho):void{
        cliente.id = ClienteCarrinhoServico.getClientes().length + 1
        ClienteCarrinhoServico.clientes.push(cliente)
    }

    public static editCliente(cliente:ClienteCarrinho):void{
        for(let i=0; i<ClienteCarrinhoServico.clientes.length; i++){
            let clienteDb = ClienteCarrinhoServico.clientes[i]
            if(clienteDb.id == cliente.id){
                clienteDb = {
                    ...cliente
                }
                break
            }
        }
    }

    public static deleteCliente(cliente:ClienteCarrinho):void{
        let listaNova = []
        for(let i=0; i<ClienteCarrinhoServico.clientes.length; i++){
            let clienteDb = ClienteCarrinhoServico.clientes[i]
            if(clienteDb.id != cliente.id){
                listaNova.push(clienteDb)
            }
        }

        ClienteCarrinhoServico.clientes = listaNova
    }
}