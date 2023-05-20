// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS2Cggb-xvQhcaB3Zrpf65fxTgmICdnSA",
  authDomain: "pgmaps-6f57f.firebaseapp.com",
  projectId: "pgmaps-6f57f",
  storageBucket: "pgmaps-6f57f.appspot.com",
  messagingSenderId: "27327972812",
  appId: "1:27327972812:web:c68afb8d60f90dc9154969"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();