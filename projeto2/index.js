import readline from "readline-sync";
import { Produto } from "./src/models/Produto.js";

console.log("=== SISTEMA DE CADASTRO DE PRODUTO ===\n");

const ObjProduto = new Produto();

ObjProduto.id = readline.questionInt("Digite o ID do produto: ");
ObjProduto.nome = readline.question("Digite o nome do produto: ");
ObjProduto.preco = readline.questionFloat("Digite o preco do produto: ");
ObjProduto.quantidade = readline.questionInt("Digite a quantidade do produto: ");

console.log("\nProcessando regras de negocio...");
ObjProduto.exibirRelatorio();