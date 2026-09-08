export class Pessoa {
    id;
    nome;
    cpf;
    rg;
    endereco;
    profissao;

    exibirRelatorio() {
        console.log(`\n--- Cadastro de usuário ---`);
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`RG: ${this.rg}`);
        console.log(`Endereco: ${this.endereco}`);
        console.log(`Profissao: ${this.profissao}`);
        console.log(`----------------------------\n`);
    };
};