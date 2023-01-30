import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbjWdU66StEBQ461l2zsTjHfpRTQJi_nc",
  authDomain: "odoya-9eb0b.firebaseapp.com",
  projectId: "odoya-9eb0b",
  storageBucket: "odoya-9eb0b.appspot.com",
  messagingSenderId: "11309626357",
  appId: "1:11309626357:web:94519242170d07a572a6bc",
  measurementId: "G-VDEVLY6WVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

