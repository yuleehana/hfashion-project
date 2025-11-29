import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEN_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // apiKey: "AIzaSyDD6lh6FVHDXQE4K9ZvFxC4YAypLoirGTY",
  // authDomain: "ezen-test.firebaseapp.com",
  // projectId: "ezen-test",
  // storageBucket: "ezen-test.firebasestorage.app",
  // messagingSenderId: "980118669217",
  // measurementId: "G-FK9Z03NNFV",

  // apiKey: "AIzaSyB2BzDQYK6mgABdzPmAA3nMTosBAA7LiPM",
  // authDomain: "hfashion-project.firebaseapp.com",
  // projectId: "hfashion-project",
  // storageBucket: "hfashion-project.firebasestorage.app",
  // messagingSenderId: "326422964641",
  // appId: "1:326422964641:web:1febdf63866201946cc3e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
