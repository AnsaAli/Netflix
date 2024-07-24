// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYYFRDoh7D1HR3zyEiECG8uksfGtwh6Jk",
  authDomain: "netflixgpt-f7959.firebaseapp.com",
  projectId: "netflixgpt-f7959",
  storageBucket: "netflixgpt-f7959.appspot.com",
  messagingSenderId: "919360773149",
  appId: "1:919360773149:web:c1d6623554fab9a30d3af4",
  measurementId: "G-2MKRX3V2HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();