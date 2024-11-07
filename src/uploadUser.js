import { doc, setDoc } from "firebase/firestore";
import db from './firebaseConfig.js'; // firebaseConfig.js에서 db를 가져옵니다.

const userData = {
  current_streak: 0,
  email: "",
  highest_streak: 0,
  join_date: new Date("2024-11-07T14:28:08.788Z"), // UTC+9에 맞춰 시간 설정
  last_active: new Date("2024-11-05T14:29:46.348Z"), // UTC+9에 맞춰 시간 설정
  last_quiz_score: 0,
  name: "",
  total_quiz_score: 0,
  total_study_time: 0,
  user_id: "",
  intelligence_disability: "이혜성" // 추가된 필드
};

const uploadUser = async () => {
  try {
    // 문서 ID는 "studyUser"로 설정
    const docRef = doc(db, "study_user", "studyUser");
    
    // 문서에 사용자 데이터를 추가
    await setDoc(docRef, userData);
    console.log("User data added successfully");
  } catch (error) {
    console.error("Error adding user data: ", error);
  }
};

// 함수를 호출하여 실행
uploadUser();
