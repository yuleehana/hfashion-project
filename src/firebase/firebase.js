import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyB2BzDQYK6mgABdzPmAA3nMTosBAA7LiPM",
  authDomain: "hfashion-project.firebaseapp.com",
  projectId: "hfashion-project",
  storageBucket: "hfashion-project.firebasestorage.app",
  messagingSenderId: "326422964641",
  appId: "1:326422964641:web:1febdf63866201946cc3e0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);