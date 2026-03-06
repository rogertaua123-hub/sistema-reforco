import { auth, db } from "./firebase.js";

import { signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { doc, getDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.login = async function(){

let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;

let cred = await signInWithEmailAndPassword(auth,email,senha);

let uid = cred.user.uid;

let docRef = doc(db,"usuarios",uid);

let usuario = await getDoc(docRef);

let tipo = usuario.data().tipo;

if(tipo == "admin"){

window.location = "dashboard.html";

}

else{

window.location = "pais.html";

}

}
import { auth } from "./firebase.js";

import { signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = function(){

let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;

signInWithEmailAndPassword(auth,email,senha)

.then(()=>{

window.location = "dashboard.html";

})

.catch((erro)=>{

alert("Erro: " + erro.message);

});

}