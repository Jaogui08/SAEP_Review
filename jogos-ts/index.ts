import readLine from "readline-sync";
import { Jogo } from "./src/models/Jogo.js";

const ObjJogo = new Jogo("GTA V", 105);

console.log(ObjJogo.getTitulo);
console.log("R$ " + ObjJogo.getPreco);

ObjJogo.setTitulo = readLine.question("Digite o novo titulo: ");
ObjJogo.setPreco = readLine.questionFloat("Digite o novo preco: ");

console.log("\n" + ObjJogo.getTitulo);
console.log("R$ " + ObjJogo.getPreco);
