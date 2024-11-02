import React from 'react';
import './login.css'; // 스타일 시트 임포트

const Login = () => {
    return (
       
       <div class="container">
        <div class="hello_2">안녕하세요! hello! 你好！</div>    
        <div class="chat_ractangle2">똑똑한 당신만의 언어 선생님을 무료로 사용해보세요.</div>
        
        <div class="divider">또는</div>

        <input type="text" id="id" placeholder="아이디" className="input-field" />
         <input type="password" id="password" placeholder="비밀번호" className="input-field" />
      
        <button class="google-button">구글로 간편로그인</button>


        <div class="auth-container">
    <a href="javascript:void(0);" class="auth-link">로그인</a>
    <a href="javascript:void(0);" class="auth-link">아이디 찾기</a>
    <a href="javascript:void(0);" class="auth-link">비밀번호 찾기</a>
</div>


    </div>

    );
};

export default Login; // 기본 내보내기
