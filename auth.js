import { getAuth, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();

function login(){

let email = document.getElementById("email").value
let senha = document.getElementById("senha").value

signInWithEmailAndPassword(auth,email,senha)
.then(()=>{
window.location = "dashboard.html"
})
.catch(()=>{
alert("Erro no login")
})

}