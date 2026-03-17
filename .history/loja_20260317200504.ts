enum Categoria {
    Eletrônicos,
    Livros,
    Vestuário
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