import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import './choice_mem_type.css';

function ChoiceMemType() {
  const navigate = useNavigate(); // navigate 함수 생성

  const handleNewMemberClick = () => {
    navigate('/management'); // management 페이지로 이동
  };

  return (
    <div className="ChoiceMemType">
      <div className="hello_3">안녕하세요! hello! 你好！</div>
      <div className="chat_ractangle_3"></div>
      <div className="new_member_button" onClick={handleNewMemberClick}>
        회원가입
      </div>
      <button className="google-button2">구글로 간편로그인</button>
    </div>
  );
}

export default ChoiceMemType;
