import { Produto } from "../models/produto";

export class ProdutoCarrinhoServico{

    private static produtos: Produto[] = []

    static buscaProdutoPorId(id: Number): Produto {
        let produto:Produto = {} as Produto

        for(let i=0; i< ProdutoCarrinhoServico.produtos.length; i++){
            let produtoDb = ProdutoCarrinhoServico.produtos[i]
            if(produtoDb.id == id){
                produto = produtoDb
                break
            }
        }

        return produto;
    }


    public static getProdutos():Produto[]{
        return ProdutoCarrinhoServico.produtos
    }

    public static setProdutos(produto:Produto):void{
        produto.id = ProdutoCarrinhoServico.getProdutos().length + 1
        ProdutoCarrinhoServico.produtos.push(produto)
    }

    public static editProduto(produto:Produto):void{
        for(let i=0; i<ProdutoCarrinhoServico.produtos.length; i++){
            let produtoDb = ProdutoCarrinhoServico.produtos[i]
            if(produtoDb.id == produto.id){
                produtoDb = {
                    ...produto
                }
                break
            }
        }
    }

    public static deleteProduto(produto:Produto):void{
        let listaNova = []
        for(let i=0; i<ProdutoCarrinhoServico.produtos.length; i++){
            let produtoDb = ProdutoCarrinhoServico.produtos[i]
            if(produtoDb.id != produto.id){
                listaNova.push(produtoDb)
            }
        }

        ProdutoCarrinhoServico.produtos = listaNova
    }
}