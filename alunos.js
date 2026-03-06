import { db } from "./firebase.js";
import { collection, addDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.salvarAluno = async function(){

let nome = document.getElementById("nome").value;
let responsavel = document.getElementById("responsavel").value;
let telefone = document.getElementById("telefone").value;

await addDoc(collection(db,"alunos"),{
nome:nome,
responsavel:responsavel,
telefone:telefone
});

alert("Aluno cadastrado");

}