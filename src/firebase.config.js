// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpLByUXk4o9_u0VEUfoXYriSqwQ-zB9Pg",
  authDomain: "house-market-c753e.firebaseapp.com",
  projectId: "house-market-c753e",
  storageBucket: "house-market-c753e.appspot.com",
  messagingSenderId: "829178414703",
  appId: "1:829178414703:web:bad0d876acee8d6f9def9a",
  measurementId: "G-GNKVFZH8TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore();