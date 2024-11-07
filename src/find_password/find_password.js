import React from 'react';
import './find_password.css'; // 스타일 시트 임포트



function FindPassword() {
    return (
       
       <div className="find_password">
        <div className='find_password_word'>비밀번호 찾기</div>
          <div className='find_password_word_small'>이메일을 입력해 비밀번호를 확인하세요.</div>
          <div className="chat_rectangle_find_password"></div> 
          <input type="text" id="id" placeholder="아이디를 입력하세요 ex) langpt@langpt.com" className="find_password_input_field" />
          <button class="find_password_button">비밀번호 찾기</button>

          <div class="auth-container_find_password">
          <a href="./login" class="auth-link_find_password">로그인으로 돌아가기</a>
          <a href="./find_id" class="auth-link_find_password">아이디 찾기</a>
        </div>


    </div>






    );
};

export default FindPassword; // 기본 내보내기
