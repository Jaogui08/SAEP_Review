export class Produto {
    id;
    nome;
    preco;
    quantidade;

    calcularValorEmEstoque() {
        return this.preco * this.quantidade;
    };

    exibirRelatorio() {
        console.log(`\n--- Relatorio de produto ---`);
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Preco: ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Valor total em estoque: R$${this.calcularValorEmEstoque()}`)
        console.log(`-----------------------------\n`);
    }
};