// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Authentication functions

// 회원가입 함수
const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
  } catch (error) {
    console.error("Error registering user:", error.message);
  }
};

// 로그인 함수
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};

// 로그아웃 함수
const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};

export { auth, db, analytics, registerUser, loginUser, logoutUser };
