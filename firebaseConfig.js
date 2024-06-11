// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolio-99ad3.firebaseapp.com",
  projectId: "portfolio-99ad3",
  storageBucket: "portfolio-99ad3.appspot.com",
  messagingSenderId: "849298134852",
  appId: "1:849298134852:web:af54f9269d989e42522911",
  measurementId: "G-NVNRSDS1EB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
