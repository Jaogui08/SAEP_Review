import readLine from "readline-sync";
import { Livro } from "./src/models/Livro.js";

const ObjLivro = new Livro("Percy Jackson", 260);

console.log(ObjLivro.getTitulo);
console.log(ObjLivro.getPaginas);

ObjLivro.setTitulo = readLine.question("Digite o novo titulo: ");
ObjLivro.setPaginas = readLine.questionFloat("Digite o novo numero de paginas: ");

console.log("\n" + ObjLivro.getTitulo);
console.log(ObjLivro.getPaginas + " paginas");
