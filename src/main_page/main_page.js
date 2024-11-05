import React from 'react';
import './main_page.css'; // 스타일 시트 임포트

function MainPage() {
  return (
    <div className="MainPage">
      
      <div className="hello">안녕하세요! hello! 你好！</div>
      <div className="ballon_left">안녕하세요! 혜성학생, 오늘은 우리 把자문에 대해 배워볼까요?</div>
      <div className="polygon"></div>
      <div className="rectangle"></div>
      <div className="ballon_right">선생님 안녕하세요!</div>
      <div className="chat_ractangle"></div>
      <div className="long_rectangle"></div>

      <a href="./login" className="long_rectangle">
    <div className="long_in_rectangle">여기를 눌러 무료로 이용해보세요.</div>
</a>
    </div>
  );
}

export default MainPage;