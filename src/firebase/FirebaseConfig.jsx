/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfjn6rWDKAR9m8nw1iMGiBtcCblvagzKQ",
  authDomain: "ecom-ch.firebaseapp.com",
  projectId: "ecom-ch",
  storageBucket: "ecom-ch.appspot.com",
  messagingSenderId: "153620672966",
  appId: "1:153620672966:web:f098ea3f6680da322a82c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };