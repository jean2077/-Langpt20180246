import { doc, setDoc } from "firebase/firestore";
import db from './firebaseConfig.js'; // firebaseConfig.js에서 db를 가져옵니다.

const quizzesData = [
  {
    question: "‘我’의 의미는 무엇인가요?",
    options: {
      option1: "너",
      option2: "나",
    },
    result: "나",
    explain: "'我'는 중국어로 '나'를 의미합니다.",
  },
  {
    question: "‘他们’의 뜻은 무엇인가요?",
    options: {
      option1: "그녀들",
      option2: "그들",
    },
    result: "그들",
    explain: "'他们'는 '그들'을 의미합니다.",
  },
  {
    question: "‘吃’의 뜻은 무엇인가요?",
    options: {
      option1: "먹다",
      option2: "마시다",
    },
    result: "먹다",
    explain: "'吃'는 '먹다'라는 의미입니다.",
  },
  {
    question: "‘我喜欢汉字’의 의미는 무엇인가요?",
    options: {
      option1: "나는 한자를 좋아한다.",
      option2: "나는 한자를 싫어한다.",
    },
    result: "나는 한자를 좋아한다.",
    explain: "'我喜欢汉字'는 '나는 한자를 좋아한다.'는 의미입니다.",
  },
  {
    question: "‘谢谢’의 뜻은 무엇인가요?",
    options: {
      option1: "안녕",
      option2: "감사합니다",
    },
    result: "감사합니다",
    explain: "'谢谢'는 '감사합니다'라는 의미입니다.",
  },
  {
    question: "‘她在学校’의 의미는 무엇인가요?",
    options: {
      option1: "그녀는 학교에 있다.",
      option2: "그녀는 학교에 없다.",
    },
    result: "그녀는 학교에 있다.",
    explain: "'她在学校'는 '그녀는 학교에 있다.'는 의미입니다.",
  },
  {
    question: "‘明天’은 무엇을 의미하나요?",
    options: {
      option1: "어제",
      option2: "내일",
    },
    result: "내일",
    explain: "'明天'은 '내일'이라는 의미입니다.",
  },
  {
    question: "‘什么’의 뜻은 무엇인가요?",
    options: {
      option1: "어디",
      option2: "무엇",
    },
    result: "무엇",
    explain: "'什么'는 '무엇'을 의미합니다.",
  },
  {
    question: "‘好’의 뜻은 무엇인가요?",
    options: {
      option1: "좋다",
      option2: "나쁘다",
    },
    result: "좋다",
    explain: "'好'는 '좋다'라는 의미입니다.",
  },
  {
    question: "‘去’의 의미는 무엇인가요?",
    options: {
      option1: "오다",
      option2: "가다",
    },
    result: "가다",
    explain: "'去'는 '가다'라는 의미입니다.",
  },
];

const uploadQuizzes = async () => {
  try {
    // 문서 ID는 "quizzes"로 설정
    const docRef = doc(db, "quizzes_set1", "chineseQuizzes");
    
    // 문서에 퀴즈 배열을 추가
    await setDoc(docRef, { quizzes: quizzesData });
    console.log("Chinese quizzes added successfully");
  } catch (error) {
    console.error("Error adding Chinese quizzes: ", error);
  }
};

// 함수를 호출하여 실행
uploadQuizzes();
