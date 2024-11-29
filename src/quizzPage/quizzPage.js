import React, { useState, useEffect } from 'react';
import { db } from '../firebase';  // firebase.js 경로 수정
import { collection, getDocs } from 'firebase/firestore';  // Firestore에서 데이터 가져오기
import { useNavigate } from 'react-router-dom';
import './quizzPage.css';

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]); // 퀴즈 데이터를 Firestore에서 가져옴
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const navigate = useNavigate();

  // Firestore에서 퀴즈 데이터 가져오기
  const fetchQuizzes = async () => {
    try {
      const quizCollectionRef = collection(db, "quizzes"); // Firestore의 "quizzes" 컬렉션 참조
      const querySnapshot = await getDocs(quizCollectionRef);
      const quizzesData = querySnapshot.docs.map((doc) => doc.data());
      setQuizzes(quizzesData); // 가져온 데이터를 상태에 저장
    } catch (error) {
      console.error("Firestore에서 퀴즈 데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const handleAnswer = (selectedOption) => {
    if (answerSelected) return;

    setSelectedAnswer(selectedOption);
    const correctAnswer = quizzes[currentIndex].result;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    setAnswerSelected(true);
  };

  const handleNext = () => {
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswerSelected(false);
      setSelectedAnswer(null);
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

  // 퀴즈 로드 중 로딩 메시지 표시
  if (quizzes.length === 0) {
    return <div>퀴즈 데이터를 불러오는 중...</div>;
  }

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
