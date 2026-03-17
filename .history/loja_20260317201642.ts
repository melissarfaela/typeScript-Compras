// --------------------------------------------------------------------
// MODELAGEM DE DADOS

enum Categoria {
    Eletronicos,
    Livros,
    Vestuario
}

interface Produto {
    id : number;
    nome : string;
    preco : number;
    categoria : Categoria;
    estoque : number;
    desconto ? : number
}

interface ItemCarrinho {
    produto : Produto;
    quantidade : number
}

// -----------------------------------------------------------------
// REGRAS DE NEGÓCIOS (FUNÇÃO)

function adicionarCarrinho(produto : Produto, quantidade : number = 1){

    if(produto.estoque === 0){
        console.log("Não está disponível no estoque!!")
        return;
    }

    return{produto, quantidade};
}

function calcularTotal(carrinho : ItemCarrinho[]) : number{
    let total = 0;

    for(const item of carrinho){
        const preco = item.produto.preco;
        const desconto = item.produto.desconto ?? 0;

        const precoFinal = preco - desconto;
        total += precoFinal * item.quantidade;
    }

    return total;

}

// -------------------------------------------------------------------------
// 