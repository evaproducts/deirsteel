// Firebase configuration for Qeimini
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-rmBiHU90gJku18SQuN5iBvVprMprE_8",
  authDomain: "qeimini.firebaseapp.com",
  projectId: "qeimini",
  storageBucket: "qeimini.firebasestorage.app",
  messagingSenderId: "1056785096337",
  appId: "1:1056785096337:web:ed6beda1abc63e960b6930"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
