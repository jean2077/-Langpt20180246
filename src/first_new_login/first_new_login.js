import React, { useState } from 'react'; // useState 추가
import './first_new_login.css'; // 스타일 시트 임포트

function FirstNewLogin() {
  const [selectedTeacher, setSelectedTeacher] = useState(null); // 선택된 선생님 상태

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher); // 클릭된 선생님으로 상태 업데이트
 
  };
  return (
    <div className="FirstNewLogin">
      <div className="hello_new_login">안녕하세요! hello! 你好！</div>
      <div className="chat_ractangle"></div>
      <div className="ballon_left">안녕하세요 혜성학생 오늘은 중국어의 把자문에 대해 알아보겠어요.</div>
      <div className="ballon_right">안녕하세요 선생님!</div>

      {/* 선생님 선택 영역 */}
      <div className="teacher-selection">
      <div className="title">언어를 가르쳐 줄 선생님을 선택해보세요</div>

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
