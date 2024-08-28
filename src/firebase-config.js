// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdSuBUdUNfXcDbPh4N8AAygre7zqY1ncs",
  authDomain: "birth-registration-4ae7a.firebaseapp.com",
  projectId: "birth-registration-4ae7a",
  storageBucket: "birth-registration-4ae7a.appspot.com",
  messagingSenderId: "935681330205",
  appId: "1:935681330205:web:d7747a72800a1471338af4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();