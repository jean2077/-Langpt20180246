// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRfmMdYmRG8RP_kBT9QSpcTr1RfWKP5rM",
  authDomain: "langpt-43fe3.firebaseapp.com",
  databaseURL: "https://langpt-43fe3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "langpt-43fe3",
  storageBucket: "langpt-43fe3.firebasestorage.app",
  messagingSenderId: "743428829551",
  appId: "1:743428829551:web:3d2a096bf0aafe71ae789a",
  measurementId: "G-H3H5KL0ENP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore 초기화

export default db;
