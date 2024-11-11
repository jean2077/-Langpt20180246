import React, { useState, useEffect } from 'react';
import './stats.css'; // CSS 파일 경로

function Stats() {
  // 상태 관리 (하드코딩된 값들)
  const [stats, setStats] = useState({
    weeklyChatCount: 120,  // 하드코딩된 일주일 채팅 수
    dailyAvgStudyTime: 45,  // 하드코딩된 일일 평균 사용 시간
    dailyTotalTime: 300,  // 하드코딩된 일일 총 시간
    totalQuizScore: 85,  // 하드코딩된 총 퀴즈 점수
    totalLoginTime: 500,  // 하드코딩된 총 로그인 시간
  });

  const [randomQuote, setRandomQuote] = useState("");  // 랜덤 명언 상태 관리
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/300");  // 하드코딩된 이미지 URL

  // 공부와 관련된 명언 배열
  const quotes = [
    "시작이 반이다. 작은 걸음이지만 시작이 중요하다.",
    "오늘 하루를 열심히 살면 내일은 더 나은 내가 된다.",
    "성공은 준비된 자에게 온다.",
    "절대 포기하지 마라. 당신이 마지막에 웃을 것이다.",
    "공부는 땀을 흘리지만, 그 땀은 결국 결실을 맺는다.",
    "꾸준함이 결국 성공을 만든다.",
    "시간을 잘 관리하는 사람만이 미래를 손에 넣을 수 있다.",
    "이해하지 못할 때, 두 번, 세 번, 반복해서 공부하라.",
    "오늘의 노력은 내일의 성과로 돌아온다.",
    "위대한 것은 작은 시작에서 나온다."
  ];

  // 랜덤 명언 선택
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]); // 랜덤으로 명언 설정
  }, []); // 컴포넌트가 처음 마운트될 때 한 번만 호출

  return (
    <div>
      <div className="how_long_study_time_st">얼마나 공부했을까요?</div>

      {/* 일주일 동안 사용한 채팅 수 */}
      <div className="use_week_chat_box_st">
        <div className="use_week_chat_number_content_st">
          일주일동안 사용한 채팅 수: {stats.weeklyChatCount}
        </div>
      </div>

      {/* 일일 평균 사용 시간 */}
      <div className="use_days_chat_box_st">
        <div className="use_days_chat_number_content_st">
          일일 평균 사용 시간: {stats.dailyAvgStudyTime} 분
        </div>
        <div className="use_days_chat_number_content_number_st">
          일일 총 시간: {stats.dailyTotalTime} 분
        </div>
      </div>

      {/* 총 퀴즈 점수 */}
      <div className="use_all_chat_box_st">
        <div className="use_all_chat_number_content_number_st">
          총 퀴즈 점수: {stats.totalQuizScore}
        </div>
      </div>

      {/* 로그인 시간 */}
      <div className="use_all_chat_box_st">
        <div className="use_all_chat_number_content_time_st">
          총 로그인 시간: {stats.totalLoginTime} 분
        </div>
      </div>

      {/* 퀴즈 페이지로 가는 앵커 링크 */}
      <div className="quiz-link-container">
        <a href="/quizz" className="quiz-link">퀴즈 풀기</a>
      </div>
    </div>
  );
}

export default Stats;
