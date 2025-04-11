import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALkEE4xidiEJAx9TZwapJaHgoofvWY6-U",
  authDomain: "prep-wise-interview.firebaseapp.com",
  projectId: "prep-wise-interview",
  storageBucket: "prep-wise-interview.firebasestorage.app",
  messagingSenderId: "543016891552",
  appId: "1:543016891552:web:33aa757acc351f9c5945c5",
  measurementId: "G-HEWQBSCSPC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)