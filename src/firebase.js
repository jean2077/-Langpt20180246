// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";  // Realtime Database 관련 함수
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";  // Authentication 관련 함수들 추가
import { getFirestore, doc, setDoc } from "firebase/firestore";  // Firestore 관련 함수들 추가

// Firebase 설정 (Firebase Console에서 확인 가능)
const firebaseConfig = {
  apiKey: "AIzaSyBKFzIBGvhRXOe_T7k5x5sXLSRqBHBl0DU",
  authDomain: "langpt3.firebaseapp.com",
  databaseURL: "https://langpt3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "langpt3",
  storageBucket: "langpt3.firebasestorage.app",
  messagingSenderId: "158730957221",
  appId: "1:158730957221:web:0a5a5f528d9cc57015384c",
  measurementId: "G-75XSDMYPGF"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Realtime Database 초기화
const database = getDatabase(app);  // Realtime Database 초기화

// Firestore 초기화
const db = getFirestore(app);

// Authentication 초기화
const auth = getAuth(app);

// Google 로그인을 위한 Provider 및 팝업 기능 추가
const googleProvider = new GoogleAuthProvider();
const signInWithGooglePopup = (auth) => {
  return signInWithPopup(auth, googleProvider);
};

// 이메일/비밀번호로 사용자 생성 (회원가입)
const createUserWithEmail = (auth, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// 이메일 인증 보내기
const sendVerificationEmail = (user) => {
  return sendEmailVerification(user);
};

// 이메일/비밀번호로 로그인
const signInWithEmail = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Firestore에 새로운 사용자 정보 저장
const saveUserData = async (user, nickname) => {
  const userRef = doc(db, "users", user.uid); // Firestore의 users 컬렉션에 유저 ID로 문서 생성
  await setDoc(userRef, {
    email: user.email,
    nickname: nickname,
    name: "",  // 기본값은 빈 문자열
    current_streak: 0,
    highest_streak: 0,
    intelligence_disability: "이혜성",  // 기본값 설정
    join_date: new Date().toISOString(),  // 가입 날짜는 현재 시간
    last_active: new Date().toISOString(),  // 마지막 활동도 현재 시간
    last_quiz_score: 0,
    password: "",  // 비밀번호는 직접 Firestore에 저장하지 않습니다.
    total_quiz_score: 0,
    total_study_time: 0,
    user_id: user.uid,  // Firebase Authentication의 UID 사용
  });
};

export { database, db, auth, signInWithGooglePopup, createUserWithEmail, sendVerificationEmail, signInWithEmail, saveUserData };  // 함수들 export
