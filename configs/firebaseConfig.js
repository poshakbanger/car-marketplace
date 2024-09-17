// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "project-bc964.firebaseapp.com",
  projectId: "project-bc964",
  storageBucket: "project-bc964.appspot.com",
  messagingSenderId: "632018202464",
  appId: "1:632018202464:web:b60a643e4a80d6e1beb805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);