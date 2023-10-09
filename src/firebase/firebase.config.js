// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxuHUaZyN1p4-BieXpjV8SW7q1Vw88Ybc",
  authDomain: "third-firebase-6e823.firebaseapp.com",
  projectId: "third-firebase-6e823",
  storageBucket: "third-firebase-6e823.appspot.com",
  messagingSenderId: "248437463700",
  appId: "1:248437463700:web:de9dec0b8520efcc22f281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth