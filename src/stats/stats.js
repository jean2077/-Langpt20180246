import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stats.css';

function Stats() {
  const [stats, setStats] = useState({
    weeklyChatCount: 120,
    dailyAvgStudyTime: 45,
    dailyTotalTime: 300,
    totalQuizScore: 85,
    totalLoginTime: 500,
  });

  const [randomQuote, setRandomQuote] = useState('');
  const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/300');
  const navigate = useNavigate();

  const quotes = [
    "시작이 반이다. 작은 걸음이지만 시작이 중요하다.",
    "오늘 하루를 열심히 살면 내일은 더 나은 내가 된다.",
    "성공은 준비된 자에게 온다.",
    "절대 포기하지 마라. 당신이 마지막에 웃을 것이다.",
  ];

  const getImageForTotalStudyTime = () => {
    if (stats.dailyTotalTime >= 300) {
      return 'https://via.placeholder.com/300?text=300시간+성취';
    } else if (stats.dailyTotalTime >= 200) {
      return 'https://via.placeholder.com/300?text=200시간+성취';
    } else if (stats.dailyTotalTime >= 100) {
      return 'https://via.placeholder.com/300?text=100시간+성취';
    } else {
      return 'https://via.placeholder.com/300?text=더+공부해주세요';
    }
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
    setImageUrl(getImageForTotalStudyTime());
  }, []);

  return (
    <div className="stats-container">
      <h1 className="greeting">안녕하세요, 얼마나 공부했을까요?</h1>

      <div className="stats-grid">
        <div className="stats-card card-blue">
          <h3>일주일 채팅 수</h3>
          <p>{stats.weeklyChatCount} 회</p>
        </div>
        <div className="stats-card card-green">
          <h3>일일 평균 사용 시간</h3>
          <p>{stats.dailyAvgStudyTime} 분</p>
        </div>
        <div className="stats-card card-purple">
          <h3>총 사용 시간</h3>
          <p>{stats.dailyTotalTime} 분</p>
        </div>
        <div className="stats-card card-orange">
          <h3>총 퀴즈 점수</h3>
          <p>{stats.totalQuizScore} 점</p>
        </div>
        <div className="stats-card card-yellow">
          <h3>총 로그인 시간</h3>
          <p>{stats.totalLoginTime} 분</p>
        </div>
      </div>

      <div className="recommendation">
     
      </div>

      <div className="quote-section">
        <h3>오늘의 명언</h3>
        <p>{randomQuote}</p>
        <button onClick={() => navigate('/quizz')} className="quiz-button">퀴즈 풀기</button>
      </div>
    </div>
  );
}

export default Stats;
