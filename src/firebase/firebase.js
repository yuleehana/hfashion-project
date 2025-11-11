import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCP_kTWkrPcuaPJgX5osc96gjQNWXq-TNA",
  authDomain: "sample-47694.firebaseapp.com",
  projectId: "sample-47694",
  storageBucket: "sample-47694.firebasestorage.app",
  messagingSenderId: "1095798112503",
  appId: "1:1095798112503:web:a6c1180d701426880753f2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);