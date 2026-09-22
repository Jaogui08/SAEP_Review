export class Livro{
    private titulo: string;
    private paginas: number;

    constructor(titulo: string, paginas: number) {
        this.titulo = titulo;
        this.paginas = paginas;
    }

    public get getTitulo(): string {
        return this.titulo;
    }

    public get getPaginas(): number {
        return this.paginas;
    }

    public set setTitulo(novoTitulo: string) {
        if (novoTitulo.length === 0) {
            console.log("\nERRO: O título do livro não pode ser vazio!");
            return;
        }
        this.titulo = novoTitulo;
        console.log("\nTítulo alterado com sucesso!");
    }

    public set setPaginas(novaPagina: number) {
        if (novaPagina < 0) {
            console.log("\nERRO: O número das páginas não pode ser negativo! Bloqueado.");
            return;
        }
        this.paginas = novaPagina;
        console.log("\nNúmero de páginas atualizado com sucesso!");
    }
}