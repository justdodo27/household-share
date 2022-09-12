// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr9YciNsnz2m1ieQCbD15MeROfQQeaKYI",
  authDomain: "household-share.firebaseapp.com",
  projectId: "household-share",
  storageBucket: "household-share.appspot.com",
  messagingSenderId: "100420803280",
  appId: "1:100420803280:web:5176b5e11e51eb1e611cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { db, auth }