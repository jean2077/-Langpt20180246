import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";  // Firebase Storage 관련 함수들 추가

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
const database = getDatabase(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);  // Firebase Storage 초기화

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
  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    email: user.email,
    nickname: nickname,
    name: "",
    current_streak: 0,
    highest_streak: 0,
    intelligence_disability: "이혜성",
    join_date: new Date().toISOString(),
    last_active: new Date().toISOString(),
    last_quiz_score: 0,
    password: "",
    total_quiz_score: 0,
    total_study_time: 0,
    user_id: user.uid,
  });
};

// Storage에서 파일 URL 가져오기
const fetchFileURL = async (filePath) => {
  const fileRef = ref(storage, filePath);  // Storage에서 파일 참조 생성
  return await getDownloadURL(fileRef);  // 파일의 다운로드 URL을 가져오기
};

export { 
  database, 
  db, 
  auth, 
  signInWithGooglePopup, 
  createUserWithEmail, 
  sendVerificationEmail, 
  signInWithEmail, 
  saveUserData, 
  storage,       // Storage 추가
  fetchFileURL,  // 파일 URL 가져오기 함수 추가
};
