
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aicruiter-52ec0.firebaseapp.com",
  projectId: "aicruiter-52ec0",
  storageBucket: "aicruiter-52ec0.firebasestorage.app",
  messagingSenderId: "1075349276249",
  appId: "1:1075349276249:web:cf61672b4d054dc96d5348",
  measurementId: "G-JHBM2XLQ01"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}