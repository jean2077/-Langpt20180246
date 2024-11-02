import React from 'react';
import './main_page.css'; // 스타일 시트 임포트

function MainPage() {
  return (
    <div className="MainPage">
      
      <div class="hello">안녕하세요! hello! 你好！</div>
      <div class="ballon_left">안녕하세요! 혜성학생, 오늘은 우리 把자문에 대해 배워볼까요?</div>
      <div class="polygon"></div>
      <div class="rectangle"></div>
      <div class="ballon_right">선생님 안녕하세요!</div>
      <div class="chat_ractangle"></div>
      <div class="long_rectangle"></div>

      <a href="#" class="long_rectangle">
    <div class="long_in_rectangle">여기를 눌러 무료로 이용해보세요.</div>
</a>
    </div>
  );
}

export default MainPage;