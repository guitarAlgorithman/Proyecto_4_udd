// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


initializeApp({
  apiKey: "AIzaSyCKw6RN6Iu7D2kiA__HOawHg56pNtYKcog",
  authDomain: "proy4-45582.firebaseapp.com",
  projectId: "proy4-45582",
  storageBucket: "proy4-45582.appspot.com",
  messagingSenderId: "345569570340",
  appId: "1:345569570340:web:c725df3c737925b010b2b1"
});

// Initialize Firebase
export const db = getFirestore();