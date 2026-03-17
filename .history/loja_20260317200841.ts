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

function adicionarCarrinho(produto : Produto, quantidade : number){

    quantidade = 10;
    if(quantida)

}

// adicionarAoCarrinho:
// Deve receber um objeto do tipo Produto e a quantidade.
// Valor Padrão: Se a quantidade não for informada, deve assumir o valor 1.
// Validação: Se o estoque do produto for 0, a função deve exibir uma mensagem de erro e não adicionar ao array de carrinho.