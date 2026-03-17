"use strict";
// --------------------------------------------------------------------
// MODELAGEM DE DADOS
Object.defineProperty(exports, "__esModule", { value: true });
// -----------------------------------------------------------------
// REGRAS DE NEGÓCIOS (FUNÇÃO)
let carrinho = [];
function adicionarCarrinho(produto, quantidade = 1) {
    if (produto.estoque === 0) {
        console.log(`❌ Erro: Produto ${produto.nome} fora de estoque!`);
        return;
    }
    carrinho.push({ produto, quantidade });
}
function calcularTotal(carrinho) {
    let total = 0;
    for (const item of carrinho) {
        const preco = item.produto.preco;
        const desconto = item.produto.desconto ?? 0;
        const precoFinal = preco - desconto;
        total += precoFinal * item.quantidade;
    }
    return total;
}
// -------------------------------------------------------------------------
// EXECUÇÃO E VALIDAÇÃO 
const produtoUm = {
    id: 1,
    nome: "Monitor 4K",
    preco: 2000,
    categoria: 'Eletronicos',
    estoque: 5
};
const produtoDois = {
    id: 2,
    nome: "Livro Clean Code",
    preco: 100,
    categoria: 'Livros',
    estoque: 10,
    desconto: 15
};
const produtoTres = {
    id: 3,
    nome: "Teclado Mecânico",
    preco: 500,
    categoria: 'Eletronicos',
    estoque: 0
};
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
const total = calcularTotal(carrinho);
console.log(`💰 Total da compra: R$ ${total}`);
function finalizarCompra() {
    const total = calcularTotal(carrinho);
    return `🧾 Total da compra: R$ ${total}`;
}
const resultadoFinal = finalizarCompra();
console.log(resultadoFinal);
//# sourceMappingURL=loja.js.map