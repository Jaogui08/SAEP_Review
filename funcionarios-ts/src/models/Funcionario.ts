export class Funcionario{
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public get getNome(): string {
        return this.nome;
    }

    public get getSalario(): number {
        return this.salario;
    }

    public set setNome(novoNome: string) {
        if (novoNome.length === 0) {
            console.log("\nERRO: O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
        console.log("\nNome alterado com sucesso!");
    }

    public set setSalario(novoSalario: number) {
        if (novoSalario < 0) {
            console.log("\nERRO: O salario nao pode ser negativo! Bloqueado.");
            return;
        }
        this.salario = novoSalario;
        console.log("\nSalario atualizado com sucesso!");
    }
}