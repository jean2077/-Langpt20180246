
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";  // Firestore 추가 임포트

// Firebase 설정
const firebaseConfig = {

};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Firestore 인스턴스 얻기

// 통계 데이터 저장 함수
const saveStatsToFirestore = async () => {
  // 예시 데이터
  const statsData = {
    weeklyChatCount: 120,
    dailyAvgStudyTime: 45,
    dailyTotalTime: 300,
    totalQuizScore: 85,
    totalLoginTime: 500,
    quoteOfTheDay: "시작이 반이다. 작은 걸음이지만 시작이 중요하다.",
  };

  // Firestore 문서 참조 (userId에 맞는 사용자 데이터)
  const userId = "user123";  // 사용자 ID로 바꿔주세요
  const statsDocRef = doc(db, "stats", userId);

  try {
    // 데이터를 Firestore에 저장
    await setDoc(statsDocRef, statsData);
    console.log("Firestore에 데이터가 성공적으로 저장되었습니다!");
  } catch (error) {
    console.error("Firestore에 데이터를 저장하는 중 오류 발생:", error);
  }
};

// 함수 호출
saveStatsToFirestore();
