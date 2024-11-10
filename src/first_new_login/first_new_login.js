import React, { useState, useEffect } from 'react';
import './first_new_login.css'; // 스타일 시트 임포트

function FirstNewLogin() {
  const [isVisible, setIsVisible] = useState({
    buttonRight: false,
    buttonLeft: false,
    teacherSelection: false,
  });

  // 컴포넌트가 마운트된 후 애니메이션을 순차적으로 트리거
  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible((prev) => ({ ...prev, buttonRight: true })), 500);  // 첫 번째: buttonRight
    const timer2 = setTimeout(() => setIsVisible((prev) => ({ ...prev, buttonLeft: true })), 1500);   // 두 번째: buttonLeft
    const timer3 = setTimeout(() => setIsVisible((prev) => ({ ...prev, teacherSelection: true })), 2500); // 세 번째: teacherSelection

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleTeacherClick = (teacher) => {
    console.log(`Selected teacher: ${teacher}`);
  };

  return (
    <div className="FirstNewLogin">
      <div className="hello_new_login">언어를 가르쳐 줄 선생님을 선택해보세요！</div>

      <div className={`button_right ${isVisible.buttonRight ? 'fade-in' : ''}`}>
        <button onClick={() => handleTeacherClick("Right Button")}>안녕하세요 선생님!</button>
      </div>

      <div className={`button_left ${isVisible.buttonLeft ? 'fade-in' : ''}`}>
        <button onClick={() => handleTeacherClick("Left Button")}>안녕하세요 혜성학생, 오늘은 중국어의 把자문에 대해 알아보겠어요.</button>
      </div>

      <div className={`teacher-selection ${isVisible.teacherSelection ? 'fade-in' : ''}`}>
        <div onClick={() => handleTeacherClick("이혜성")}>엄격하지만 다정한 선생님 "이혜성"</div>
        <div onClick={() => handleTeacherClick("야스오")}>작년에 해외에서 친해진 펜팔친구 "야스오"</div>
        <div onClick={() => handleTeacherClick("푸바오")}>장난끼많은 귀여운 판다 "푸바오"</div>
      </div>
    </div>
  );
}

export default FirstNewLogin;
