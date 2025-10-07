import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-dfd27.firebaseapp.com",
  projectId: "loginonecart-dfd27",
  storageBucket: "loginonecart-dfd27.firebasestorage.app",
  messagingSenderId: "934828899787",
  appId: "1:934828899787:web:991445470199c6000d8a4e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

