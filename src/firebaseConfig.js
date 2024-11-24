// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbBz_PeLoMWiuvD-F5H0qN-GexzEgf07o",
  authDomain: "wiki-final-2aec0.firebaseapp.com",
  projectId: "wiki-final-2aec0",
  storageBucket: "wiki-final-2aec0.firebasestorage.app",
  messagingSenderId: "358694206457",
  appId: "1:358694206457:web:21ea547ca0867baf721b28",
  measurementId: "G-FWGNQ704PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);