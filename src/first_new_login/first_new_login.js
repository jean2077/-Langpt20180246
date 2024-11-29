import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import './first_new_login.css'; // 스타일 시트 임포트

function FirstNewLogin() {
  const [selectedTeacher, setSelectedTeacher] = useState(null); // 선택된 선생님 상태
  const navigate = useNavigate(); // 페이지 이동 함수

  const handleStartClick = () => {
    if (selectedTeacher) {
      // 선택된 선생님 이름을 상태로 전달하며 /chat 페이지로 이동
      navigate('/chat', { state: { teacherName: selectedTeacher } });
    } else {
      alert('선생님을 선택해주세요!'); // 선택하지 않은 경우 경고
    }
  };

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher); // 클릭된 선생님으로 상태 업데이트
  };

  return (
    <div className="FirstNewLogin">
      <div className="hello_new_login">안녕하세요! hello! 你好！</div>
      <div className="chat_ractangle"></div>
      <div className="ballon_left">
        안녕하세요 혜성학생 오늘은 중국어의 把자문에 대해 알아보겠어요.
      </div>
      <div className="ballon_right">안녕하세요 선생님!</div>

      {/* 선생님 선택 영역 */}
      <div className="teacher-selection">
        {/* 각각의 선생님을 클릭 시 선택 상태에 따라 스타일 변경 */}
        <div
          className={`teacher ${selectedTeacher === "메이린" ? "selected" : ""}`}
          onClick={() => handleTeacherClick("메이린")}
        >
          엄격하지만 다정한 선생님 "메이린"
        </div>
        <div
          className={`teacher ${selectedTeacher === "제이크" ? "selected" : ""}`}
          onClick={() => handleTeacherClick("제이크")}
        >
          해외에서 오래 살다온 "제이크"
        </div>
        <div
          className={`teacher ${selectedTeacher === "푸바오" ? "selected" : ""}`}
          onClick={() => handleTeacherClick("푸바오")}
        >
          장난끼 많은 귀여운 판다 "푸바오"
        </div>
      </div>

      {/* 시작 버튼 */}
      <button onClick={handleStartClick} className="start">
        이제 즐거운 언어학습을 시작해볼까요?
      </button>
    </div>
  );
}

export default FirstNewLogin;
