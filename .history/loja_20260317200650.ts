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

function adicionarCarrinho(){
    
}