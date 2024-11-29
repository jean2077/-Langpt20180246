import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase'; // Firestore 초기화 파일 경로

const addQuizzes = async () => {
  const quizCollectionRef = collection(db, "quizzes"); // "quizzes" 컬렉션 참조
  const quizzes = [
    {
      explain: "'我'는 중국어로 '나'를 의미합니다.",
      options: {
        option1: "너",
        option2: "나"
      },
      question: "‘我’의 의미는 무엇인가요?",
      result: "나"
    },
    {
      explain: "'他们'는 '그들'을 의미합니다.",
      options: {
        option1: "그녀들",
        option2: "그들"
      },
      question: "‘他们’의 뜻은 무엇인가요?",
      result: "그들"
    },
    {
      explain: "'吃'는 '먹다'라는 의미입니다.",
      options: {
        option1: "먹다",
        option2: "마시다"
      },
      question: "‘吃’의 뜻은 무엇인가요?",
      result: "먹다"
    },
    {
      explain: "'谢谢'는 '감사합니다'라는 의미입니다.",
      options: {
        option1: "안녕",
        option2: "감사합니다"
      },
      question: "‘谢谢’의 뜻은 무엇인가요?",
      result: "감사합니다"
    },
    {
      explain: "'Hello'는 인사말로 '안녕하세요'를 의미합니다.",
      options: {
        option1: "안녕히 가세요",
        option2: "안녕하세요"
      },
      question: "‘Hello’의 뜻은 무엇인가요?",
      result: "안녕하세요"
    },
  ];

  try {
    for (const quiz of quizzes) {
      await addDoc(quizCollectionRef, quiz);
    }
    console.log("퀴즈 데이터가 성공적으로 Firestore에 저장되었습니다!");
  } catch (error) {
    console.error("퀴즈 데이터를 Firestore에 저장하는 중 오류 발생:", error);
  }
};

// 실행
addQuizzes();

