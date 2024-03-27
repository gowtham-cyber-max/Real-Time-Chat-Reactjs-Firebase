import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyDuS5FWHSy48XKuObHRN4HelCJ2uzmoXuM",
    authDomain: "chat-genie-4262.firebaseapp.com",
    projectId: "chat-genie-4262",
    storageBucket: "chat-genie-4262.appspot.com",
    messagingSenderId: "145902312100",
    appId: "1:145902312100:web:4bdbe657a98cf1c9c0a431",
    measurementId: "G-PSVXREXSD2"
  };

const app=initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);