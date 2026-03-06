import { db } from "./firebase.js";
import { collection, addDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.registrarPagamento = async function(){

let aluno = document.getElementById("aluno").value;
let valor = document.getElementById("valor").value;
let mes = document.getElementById("mes").value;

await addDoc(collection(db,"pagamentos"),{
aluno:aluno,
valor:valor,
mes:mes
});

alert("Pagamento registrado");

}