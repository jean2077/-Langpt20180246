import React from 'react';
import { Link } from 'react-router-dom';
import './quizes.css'; // CSS 파일 경로 수정

// Quizes 컴포넌트를 정의
const App = () => {
  return (
    <div className="div">
      <div className="user_name">안녕하세요! oo님</div>
      <div className="component-8">
        <div className="middle_box"></div>
        <div className="last_study_days">
          마지막으로 공부한 날: 2024-10-23 오후 1시 48분 12일전
        </div>
      </div>
      <div className="more_than">그 정도로는 늘지 않아요 더 열심히 해보세요</div>
      <div className="quote">
        언어는 운명을 결정지을 수 있는 중요한 요소다 -프로이트-
      </div>
      <div className="component-9">
        <div className="quize_box"></div>
        <div className="quize_content">창조하다는 중국어로?</div>
        <div className="today_quize">오늘의 퀴즈</div>
        <div className="quize_box_more">더보기</div>
      </div>
      <div className="component-13">
        <div className="word_box"></div>
        <div className="word_content">创造： 창조하다</div>
        <div className="today_word">오늘의 단어</div>
      </div>
      <div className="component-12">
        <div className="rectangle-472"></div>
      </div>
      <div className="component-1">
        <div className="go_to_main_box"></div>
        <div className="go_to_main_content">메인화면</div>
        <img className="home-02" src="home-020.svg" alt="Home" />
      </div>
      <div className="component-2">
        <div className="ellipse-1"></div>
        <div className="div9">새로운 채팅</div>
        <img className="message-plus-square" src="message-plus-square0.svg" alt="Message Plus" />
      </div>
      <div className="component-3">
        <div className="last_study_days2">
          1월 21 목 10: 24
          <br />
          2주전
        </div>
        <div className="chat_box"></div>
        <div className="chat_content">대상혁</div>
        <div className="user_name1">skt t1</div>
        <div className="last_study_days1">1월 24 금 10: 24</div>
        <div className="user_name2">t1</div>
        <div className="chat_box2"></div>
        <div className="chat_content2">젠장 또 대상혁이야</div>
      </div>
      <div className="component-4">
        <div className="my_information_box"></div>
        <div className="my_information_content">내 정보</div>
        <img className="face-id-square" src="face-id-square0.svg" alt="Face ID" />
      </div>
      <div className="how_study_box">얼마나 공부했을까?</div>
    </div>
  );
};

export default App;