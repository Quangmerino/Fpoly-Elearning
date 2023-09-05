// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGp5LmlM2EEzZjrRHxwygv2cOyDD-Qr-o",
  authDomain: "e-lerning-45367.firebaseapp.com",
  projectId: "e-lerning-45367",
  storageBucket: "e-lerning-45367.appspot.com",
  messagingSenderId: "433688387669",
  appId: "1:433688387669:web:180fba1fc57b781004b4dc",
  measurementId: "G-8ZF9X7V9KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);