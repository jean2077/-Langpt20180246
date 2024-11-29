import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";
import './stats.css';

function Stats() {
  const [stats, setStats] = useState({
    weeklyChatCount: 0,
    dailyAvgStudyTime: 0,
    dailyTotalTime: 0,
    totalQuizScore: 0,
    totalLoginTime: 0,
  });

  const [randomQuote, setRandomQuote] = useState('');
  const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/300');
  const navigate = useNavigate();
  const db = getFirestore(); // Firestore 초기화

  const getImageForTotalStudyTime = (dailyTotalTime) => {
    if (dailyTotalTime >= 300) {
      return 'https://via.placeholder.com/300?text=300시간+성취';
    } else if (dailyTotalTime >= 200) {
      return 'https://via.placeholder.com/300?text=200시간+성취';
    } else if (dailyTotalTime >= 100) {
      return 'https://via.placeholder.com/300?text=100시간+성취';
    } else {
      return 'https://via.placeholder.com/300?text=더+공부해주세요';
    }
  };

  // Firestore에서 사용자 통계 가져오기
  const fetchUserStats = async (userId) => {
    try {
      const docRef = doc(db, "userStats", userId); // "userStats" 컬렉션에서 특정 사용자 문서 참조
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setStats(data);
        setImageUrl(getImageForTotalStudyTime(data.dailyTotalTime)); // 이미지 URL 업데이트
      } else {
        console.error("사용자 통계 문서를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("Firestore 데이터 가져오기 중 오류 발생:", error);
    }
  };

  // Firestore에서 명언 가져오기
  const fetchQuotes = async () => {
    try {
      const quotesCollectionRef = collection(db, "quotes"); // "quotes" 컬렉션 참조
      const querySnapshot = await getDocs(quotesCollectionRef);
      const quotesArray = querySnapshot.docs.map((doc) => doc.data().quote);

      if (quotesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        setRandomQuote(quotesArray[randomIndex]); // 랜덤 명언 선택
      } else {
        console.error("명언 데이터가 없습니다.");
      }
    } catch (error) {
      console.error("명언 데이터를 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    const userId = "exampleUserId"; // 사용자 ID를 적절히 교체하세요 (예: 인증 시스템에서 가져오기)
    fetchUserStats(userId); // Firestore에서 사용자 통계 데이터 가져오기
    fetchQuotes(); // Firestore에서 명언 데이터 가져오기
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

      <div className="quote-section">
        <h3>오늘의 명언</h3>
        <p>{randomQuote}</p>
        <button onClick={() => navigate('/quizz')} className="quiz-button">퀴즈 풀기</button>
      </div>
    </div>
  );
}

export default Stats;
