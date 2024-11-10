import React, { useState, useEffect } from 'react'; // useState, useEffect 추가
import './first_new_login.css'; // 스타일 시트 임포트

function FirstNewLogin() {
  const [selectedTeacher, setSelectedTeacher] = useState(null); // 선택된 선생님 상태

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher); // 클릭된 선생님으로 상태 업데이트
  }

  const [isVisible, setIsVisible] = useState({
    ballonright: false,
    ballonleft: false,
    teacherselection: false,
  });

  // 애니메이션을 순차적으로 실행하는 useEffect
  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible((prev) => ({ ...prev, ballonright: true })), 500);  // 첫 번째: ballonRight
    const timer2 = setTimeout(() => setIsVisible((prev) => ({ ...prev, ballonleft: true })), 1500);   // 두 번째: ballonLeft
    const timer3 = setTimeout(() => setIsVisible((prev) => ({ ...prev, teacherselection: true })), 2500); // 세 번째: teacherselection

    // cleanup 함수로 타이머를 정리
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="FirstNewLogin">
      <div className="hello_new_login">
        AI 캐릭터를 선택해보세요！
      </div>
      <div className="chat_ractangle"></div>

      {/* 왼쪽 말풍선 */}
      <div className={`ballon_left ${isVisible.ballonleft ? 'fade-in' : ''}`}>
        안녕하세요 혜성학생 오늘은 중국어의 把자문에 대해 알아보겠어요.
      </div>

      {/* 오른쪽 말풍선 */}
      <div className={`ballon_right ${isVisible.ballonright ? 'fade-in' : ''}`}>
        안녕하세요 선생님!
      </div>

      {/* 선생님 선택 영역 */}
      <div className={`teacher-selection ${isVisible.teacherselection ? 'fade-in' : ''}`}>
        <div className="title"></div>

        {/* 각각의 선생님을 클릭 시 선택 상태에 따라 스타일 변경 */}
        <div
          className={`teacher ${selectedTeacher === "이혜성" ? "selected" : ""}`}
          onClick={() => handleTeacherClick("이혜성")}
        >
          엄격하지만 다정한 선생님 "이혜성"
        </div>

        <div
          className={`teacher ${selectedTeacher === "야스오" ? "selected" : ""}`}
          onClick={() => handleTeacherClick("야스오")}
        >
          작년에 해외에서 친해진 펜팔친구 "야스오"
        </div>

        <div
          className={`teacher ${selectedTeacher === "푸바오" ? "selected" : ""}`}
          onClick={() => handleTeacherClick("푸바오")}
        >
          장난끼많은 귀여운 판다 "푸바오"
        </div>

        <a href="./main_chat_page" className="start">이제 즐거운 언어학습을 시작해볼까요?</a>
      </div>
    </div>
  );
}

export default FirstNewLogin;
