import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
apiKey: "COLE_AQUI",
authDomain: "COLE_AQUI",
projectId: "COLE_AQUI",
storageBucket: "COLE_AQUI",
messagingSenderId: "COLE_AQUI",
appId: "COLE_AQUI"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);