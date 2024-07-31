// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjNKyKFCyo8tcQOnx8NMTjGGYHEgVSA-Q",
  authDomain: "birth-registration-fecf6.firebaseapp.com",
  projectId: "birth-registration-fecf6",
  storageBucket: "birth-registration-fecf6.appspot.com",
  messagingSenderId: "810952949914",
  appId: "1:810952949914:web:f1c5416857aee5820fdf23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();