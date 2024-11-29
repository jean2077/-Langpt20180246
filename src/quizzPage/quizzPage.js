import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // firebase.js 경로 수정
import { doc, getDoc } from 'firebase/firestore'; // Firestore에서 특정 문서 데이터 가져오기
import { useNavigate } from 'react-router-dom';
import './quizzPage.css';

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const navigate = useNavigate();

  // Firestore에서 `chineseQuizzes` 문서의 `quizzes` 배열 가져오기
  const fetchQuizzes = async () => {
    try {
      // `chineseQuizzes` 문서의 경로 지정
      const quizDocRef = doc(db, 'quizzes', 'chineseQuizzes');
      const quizDoc = await getDoc(quizDocRef);

      if (quizDoc.exists()) {
        const quizData = quizDoc.data().quizzes; // `quizzes` 배열 가져오기
        setQuizzes(quizData);
      } else {
        console.error('Firestore에서 문서를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('Firestore에서 데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  if (quizzes.length === 0) {
    return <div>퀴즈 데이터를 불러오는 중...</div>;
  }

  const currentQuiz = quizzes[currentIndex] || {};
  const options = currentQuiz.options || { option1: '선택지 없음', option2: '선택지 없음' };

  const handleAnswer = (selectedOption) => {
    if (answerSelected) return;

    setSelectedAnswer(selectedOption);
    const correctAnswer = currentQuiz.result;
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
      alert(`퀴즈 완료! 총 ${score}/${quizzes.length}개의 문제를 맞혔습니다.`);
      setCurrentIndex(0);
      setScore(0);
      setAnswerSelected(false);
      setSelectedAnswer(null);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="quiz-container">
      <h2>퀴즈</h2>
      <div className="question-container">
        <p>{currentQuiz.question}</p>
        <div className="options">
          <button
            onClick={() => handleAnswer(options.option1)}
            disabled={answerSelected}
            style={{
              backgroundColor: selectedAnswer === options.option1 ? '#d3d3d3' : '',
            }}
          >
            {options.option1}
          </button>
          <button
            onClick={() => handleAnswer(options.option2)}
            disabled={answerSelected}
            style={{
              backgroundColor: selectedAnswer === options.option2 ? '#d3d3d3' : '',
            }}
          >
            {options.option2}
          </button>
        </div>
      </div>
      {answerSelected && <button onClick={handleNext}>다음 문제</button>}
      <div className="score">
        <p>현재 점수: {score}</p>
      </div>
      <button onClick={handleGoHome}>홈으로 돌아가기</button>
    </div>
  );
};

export default QuizPage;
