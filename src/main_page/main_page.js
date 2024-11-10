import React, { useState, useEffect } from 'react';
import './main_page.css'; // 스타일 시트 임포트

function MainPage() {
  const [isVisible, setIsVisible] = useState({
    ballonRight: false,
    ballonLeft: false,
    longRectangle: false,
  });

  // 컴포넌트가 마운트된 후 애니메이션을 순차적으로 트리거
  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible((prev) => ({ ...prev, ballonRight: true })), 500);  // 첫 번째: ballonRight
    const timer2 = setTimeout(() => setIsVisible((prev) => ({ ...prev, ballonLeft: true })), 1500);   // 두 번째: ballonLeft
    const timer3 = setTimeout(() => setIsVisible((prev) => ({ ...prev, longRectangle: true })), 2500); // 세 번째: longRectangle

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="MainPage_mp">
      <div className="hello_mp">안녕하세요! hello! 你好！</div>

      <div className={`ballon_right_mp ${isVisible.ballonRight ? 'fade-in' : ''}`}>
        선생님 안녕하세요!
      </div>

      <div className={`ballon_left_mp ${isVisible.ballonLeft ? 'fade-in' : ''}`}>
        안녕하세요! 혜성학생, 오늘은 우리 把자문에 대해 배워볼까요?
      </div>

      <div className="chat_ractangle">

     
      </div>
      <a href="./login" className={`long_rectangle_mp ${isVisible.longRectangle ? 'fade-in' : ''}`}>
        <div className="long_in_rectangle_mp">여기를 눌러 무료로 이용해보세요.</div>
        
      </a>
    </div>
  );
}

export default MainPage;
