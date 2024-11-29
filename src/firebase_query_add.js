import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";

const db = getFirestore();

// 통계 데이터 추가
const addUserStats = async () => {
  const userStatsRef = doc(db, "userStats", "exampleUserId");
  await setDoc(userStatsRef, {
    weeklyChatCount: 120,
    dailyAvgStudyTime: 45,
    dailyTotalTime: 300,
    totalQuizScore: 85,
    totalLoginTime: 500,
  });
  console.log("통계 데이터가 추가되었습니다.");
};

// 명언 데이터 추가
const addQuotes = async () => {
  const quotesCollectionRef = collection(db, "quotes");
  const quotes = [
    "시작이 반이다. 작은 걸음이지만 시작이 중요하다.",
    "오늘 하루를 열심히 살면 내일은 더 나은 내가 된다.",
    "성공은 준비된 자에게 온다.",
    "절대 포기하지 마라. 당신이 마지막에 웃을 것이다.",
  ];

  for (const quote of quotes) {
    await addDoc(quotesCollectionRef, { quote });
  }
  console.log("명언 데이터가 추가되었습니다.");
};

// 함수 호출
addUserStats();
addQuotes();
