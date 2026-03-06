import { db } from "./firebase.js"
import { collection, addDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function salvarAluno(){

let nome = document.getElementById("nome").value

await addDoc(collection(db,"alunos"),{
nome:nome
})

alert("Aluno salvo")

}