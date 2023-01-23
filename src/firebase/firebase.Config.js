// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG3r8afzjve5D0BBXS6rVnl3ngqD2A58s",
  authDomain: "craft-connect-8e9d6.firebaseapp.com",
  projectId: "craft-connect-8e9d6",
  storageBucket: "craft-connect-8e9d6.appspot.com",
  messagingSenderId: "548600946482",
  appId: "1:548600946482:web:9d0f38238d6d136066412b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage();
export const db = getFirestore()
export default app;