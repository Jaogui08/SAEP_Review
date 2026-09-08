import readline from "readline-sync";
import { Pessoa } from "./src/models/Pessoa.js";

console.log("=== SISTEMA DE CADASTRO ===\n");

const ObjPessoa = new Pessoa();

ObjPessoa.id = readline.questionInt("Digite o ID da pessoa: ");
ObjPessoa.nome = readline.question("Digite o seu nome: ");
ObjPessoa.cpf = readline.question("Digite o seu CPF: ");
ObjPessoa.rg = readline.question("Digite seu RG: ");
ObjPessoa.endereco = readline.question("Digite o seu endereco: ");
ObjPessoa.profissao = readline.question("Digite a sua profissao: ");

console.log("\nProcessando regras de negocio...");
ObjPessoa.exibirRelatorio();