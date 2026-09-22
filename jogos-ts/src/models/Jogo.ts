export class Jogo{
    private titulo: string;
    private preco: number;

    constructor(titulo: string, preco: number) {
        this.titulo = titulo;
        this.preco = preco;
    }

    public get getTitulo(): string {
        return this.titulo;
    }

    public get getPreco(): number {
        return this.preco;
    }

    public set setTitulo(novoTitulo: string) {
        if (novoTitulo.length === 0) {
            console.log("\nERRO: O titulo nao pode ser vazio!");
            return;
        }
        this.titulo = novoTitulo;
        console.log("\nTitulo alterado com sucesso!");
    }

    public set setPreco(novoPreco: number) {
        if (novoPreco < 0) {
            console.log("\nERRO: O preco nao pode ser negativo! Bloqueado.");
            return;
        }
        this.preco = novoPreco;
        console.log("\nPreco atualizado com sucesso!");
    }
}