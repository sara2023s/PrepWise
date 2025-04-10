import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcoGOh6HxNWah7gB-BLNoaFPr4ChC6RqU",
  authDomain: "prepwise-81611.firebaseapp.com",
  projectId: "prepwise-81611",
  storageBucket: "prepwise-81611.firebasestorage.app",
  messagingSenderId: "122527069165",
  appId: "1:122527069165:web:a66659584e8401211bede4",
  measurementId: "G-QMX3JEG8C7"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);