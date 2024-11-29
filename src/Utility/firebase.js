import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJeiyJQ-ffOMjyGL5Y2pX2hjxPlxyZvKo",
  authDomain: "clone-1eb12.firebaseapp.com",
  projectId: "clone-1eb12",
  storageBucket: "clone-1eb12.firebasestorage.app",
  messagingSenderId: "546498754671",
  appId: "1:546498754671:web:1d6d51b1665c90112cb59a",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
