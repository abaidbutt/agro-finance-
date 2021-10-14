// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwWuwcOevC6oj3waU-qknhA7rD-gn5jrU",
  authDomain: "agrofinance-371e0.firebaseapp.com",
  projectId: "agrofinance-371e0",
  storageBucket: "agrofinance-371e0.appspot.com",
  messagingSenderId: "655010941754",
  appId: "1:655010941754:web:fce5ff01a4fcf1484e9e03",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(app);
const auth = app.auth();
const db = app.firestore();
export { auth, db };
