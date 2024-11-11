import React, { useState, useEffect } from 'react';
import { db } from '../firebase';  // firebase.js 경로 수정
import { collection, getDocs } from 'firebase/firestore';  // Firestore에서 데이터 가져오기
import { useNavigate } from 'react-router-dom';  // react-router-dom의 useNavigate 가져오기
import './quizzPage.css';  // quizzPage 폴더 내의 quizPage.css를 임포트

const QuizPage = () => {
  // 하드코딩된 퀴즈 데이터
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
      explain: "'我喜欢汉字'는 '나는 한자를 좋아한다.'는 의미입니다.",
      options: {
        option1: "나는 한자를 좋아한다.",
        option2: "나는 한자를 싫어한다."
      },
      question: "‘我喜欢汉字’의 의미는 무엇인가요?",
      result: "나는 한자를 좋아한다."
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
    // ... (나머지 퀴즈 항목들도 동일한 방식으로 추가)
     // 영어 문제
     {
      explain: "'Hello'는 인사말로 '안녕하세요'를 의미합니다.",
      options: {
        option1: "안녕히 가세요",
        option2: "안녕하세요"
      },
      question: "‘Hello’의 뜻은 무엇인가요?",
      result: "안녕하세요"
    },
    {
      explain: "'Goodbye'는 '안녕히 가세요'를 의미합니다.",
      options: {
        option1: "안녕하세요",
        option2: "안녕히 가세요"
      },
      question: "‘Goodbye’의 뜻은 무엇인가요?",
      result: "안녕히 가세요"
    },
    {
      explain: "'Thank you'는 '감사합니다'를 의미합니다.",
      options: {
        option1: "감사합니다",
        option2: "미안합니다"
      },
      question: "‘Thank you’의 뜻은 무엇인가요?",
      result: "감사합니다"
    },
    {
      explain: "'Sorry'는 '미안합니다'라는 의미입니다.",
      options: {
        option1: "미안합니다",
        option2: "안녕히 계세요"
      },
      question: "‘Sorry’의 뜻은 무엇인가요?",
      result: "미안합니다"
    },
    {
      explain: "'Good morning'은 '좋은 아침입니다'라는 인사말입니다.",
      options: {
        option1: "좋은 아침입니다",
        option2: "잘자요"
      },
      question: "‘Good morning’의 뜻은 무엇인가요?",
      result: "좋은 아침입니다"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택한 답을 저장하는 상태

  const navigate = useNavigate();

  const handleAnswer = (selectedOption) => {
    if (answerSelected) return;

    setSelectedAnswer(selectedOption);
    const correctAnswer = quizzes[currentIndex].result;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    setAnswerSelected(true); // 답을 선택하면 답변 고정
  };

  const handleNext = () => {
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswerSelected(false);
      setSelectedAnswer(null); // 선택한 답 초기화
    } else {
      alert(`퀴즈 완료! 총 ${score}개의 문제를 맞혔습니다.`);
      setCurrentIndex(0); // 초기화
      setScore(0); // 점수 초기화
      setAnswerSelected(false);
      setSelectedAnswer(null);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const currentQuiz = quizzes[currentIndex];

  return (
    <div className="quiz-container">
      <h2>퀴즈</h2>
      <div className="question-container">
        <p>{currentQuiz.question}</p>
        <div className="options">
          <button
            onClick={() => handleAnswer(currentQuiz.options.option1)}
            disabled={answerSelected}
            style={{
              backgroundColor: selectedAnswer === currentQuiz.options.option1 ? '#d3d3d3' : ''
            }}
          >
            {currentQuiz.options.option1}
          </button>
          <button
            onClick={() => handleAnswer(currentQuiz.options.option2)}
            disabled={answerSelected}
            style={{
              backgroundColor: selectedAnswer === currentQuiz.options.option2 ? '#d3d3d3' : ''
            }}
          >
            {currentQuiz.options.option2}
          </button>
        </div>
      </div>
      {answerSelected && (
        <button onClick={handleNext}>다음 문제</button>
      )}
      <div className="score">
        <p>현재 점수: {score}</p>
      </div>
      <button onClick={handleGoHome}>홈으로 돌아가기</button>
    </div>
  );
};

export default QuizPage;