import readLine from "readline-sync";
import { Funcionario } from "./src/models/Funcionario.js";

const ObjFuncionario = new Funcionario("Joao", 5500);

console.log(ObjFuncionario.getNome);
console.log("R$ " + ObjFuncionario.getSalario);

ObjFuncionario.setNome = readLine.question("Digite o novo nome: ");
ObjFuncionario.setSalario = readLine.questionFloat("Digite o novo salario: ");

console.log("\n" + ObjFuncionario.getNome);
console.log("R$ " + ObjFuncionario.getSalario);
