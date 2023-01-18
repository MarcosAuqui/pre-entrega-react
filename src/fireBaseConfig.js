// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOi5xBCi9hUNafThh89hoKrPfeuye0b2I",
  authDomain: "reactcoder-6522f.firebaseapp.com",
  projectId: "reactcoder-6522f",
  storageBucket: "reactcoder-6522f.appspot.com",
  messagingSenderId: "34891342232",
  appId: "1:34891342232:web:b07b3c0f3ad26f22b38bed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// db = data base