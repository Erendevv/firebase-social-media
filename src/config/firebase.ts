// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtlvpvJOtIwEMthR5KivfUTCnMalm-GNU",
  authDomain: "react-social-media-6e965.firebaseapp.com",
  projectId: "react-social-media-6e965",
  storageBucket: "react-social-media-6e965.appspot.com",
  messagingSenderId: "46994288011",
  appId: "1:46994288011:web:cae0fdd6ea64ad6da7138e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);