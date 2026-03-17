// --------------------------------------------------------------------
// MODELAGEM DE DADOS

type Categoria = 'Eletronicos' | 'Livros' | 'Vestuario';

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

let carrinho : ItemCarrinho[] = [];

function adicionarCarrinho(produto : Produto, quantidade : number = 1){

    if(produto.estoque === 0){
        console.log(`❌ Erro: Produto ${produto.nome} fora de estoque!`);
        return;
    }

    carrinho.push({produto, quantidade});
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
// EXECUÇÃO E VALIDAÇÃO 

const produtoUm : Produto = {
    id : 1,
    nome : "Monitor 4K",
    preco : 2000,
    categoria : 'Eletronicos',
    estoque : 5
}

const produtoDois : Produto = {
    id : 2,
    nome : "Livro Clean Code",
    preco : 100,
    categoria : 'Livros',
    estoque : 10,
    desconto : 15
}

const produtoTres : Produto = {
    id : 3,
    nome : "Teclado Mecânico",
    preco : 500,
    categoria : 'Eletronicos',
    estoque : 0
}

// const produtoQuatro : Produto = {
//     id : 4,
//     nome : "Camarão",
//     preco : 50,
//     categoria : 'Alimento', !! Da erro pois Alimento não está no type
//     estoque : 0
// }

adicionarCarrinho(produtoUm, 1);
adicionarCarrinho(produtoDois);
adicionarCarrinho(produtoTres);
adicionarCarrinho(produtoUm, 2);

function finalizarCompra() : string{
    const total = calcularTotal(carrinho);
    return `🧾 Total da compra: R$ ${total}`;
}

const resultadoFinal = finalizarCompra();
// finalizarCompra + 10; !! da erro pois resultado final é string
console.log(resultadoFinal);