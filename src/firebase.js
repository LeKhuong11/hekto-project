import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC7nS85MGf4tinqNE7-2rQcNVX0AsQnlqk",
  authDomain: "authentication-hekto-project.firebaseapp.com",
  projectId: "authentication-hekto-project",
  storageBucket: "authentication-hekto-project.appspot.com",
  messagingSenderId: "625005004414",
  appId: "1:625005004414:web:920dd00ee789c59c16ba2f",
  measurementId: "G-WKL8RLNVBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app