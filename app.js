let alunos = []
let pagamentos = []
let frequencia = []
let avaliacoes = []

function mostrar(secao){

document.querySelectorAll(".tela").forEach(t => {
t.style.display = "none"
})

document.getElementById(secao).style.display = "block"

}

function cadastrarAluno(){

let nome = document.getElementById("nomeAluno").value

alunos.push(nome)

let lista = document.getElementById("listaAlunos")

lista.innerHTML = ""

alunos.forEach(a => {

let li = document.createElement("li")
li.textContent = a

lista.appendChild(li)

})

}

function registrarPagamento(){

let aluno = document.getElementById("alunoPagamento").value
let valor = document.getElementById("valorPagamento").value

pagamentos.push(aluno + " - R$ " + valor)

let lista = document.getElementById("listaPagamentos")

lista.innerHTML = ""

pagamentos.forEach(p => {

let li = document.createElement("li")
li.textContent = p

lista.appendChild(li)

})

}

function registrarPresenca(){

let aluno = document.getElementById("alunoFreq").value
let data = document.getElementById("dataFreq").value

frequencia.push(aluno + " - " + data)

let lista = document.getElementById("listaFrequencia")

lista.innerHTML = ""

frequencia.forEach(f => {

let li = document.createElement("li")
li.textContent = f

lista.appendChild(li)

})

}

function salvarAvaliacao(){

let aluno = document.getElementById("alunoAvaliacao").value
let portugues = document.getElementById("portugues").value
let matematica = document.getElementById("matematica").value

avaliacoes.push(aluno + " | Português: " + portugues + " | Matemática: " + matematica)

let lista = document.getElementById("listaAvaliacoes")

lista.innerHTML = ""

avaliacoes.forEach(a => {

let li = document.createElement("li")
li.textContent = a

lista.appendChild(li)

})

}import { db } from "./firebase.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function cadastrarAluno(){

let nome = document.getElementById("nomeAluno").value

await addDoc(collection(db,"alunos"),{
nome:nome
})

alert("Aluno salvo no banco de dados")

}