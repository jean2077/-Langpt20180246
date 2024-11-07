import React from 'react';
import './find_id.css'; // 스타일 시트 임포트



function FindId() {
return (

        <div className="find_id">
          <div className='find_id_word'>아이디 찾기</div>
          <div className='find_id_word_small'>이메일을 입력해 회원가입여부를 확인하세요.</div>
          <div className="chat_rectangle_find_id"></div> 
          <input type="text" id="id" placeholder="아이디를 입력하세요 ex) langpt@langpt.com" className="find_input_field" />
          <button class="find_id_button">아이디 찾기</button>

          <div class="auth-container_find_id">
          <a href="./login" class="auth-link_find_id">로그인으로 돌아가기</a>
          <a href="./find_password" class="auth-link_find_id">비밀번호 찾기</a>
        </div>
        </div>
       );
}

export default FindId; // 기본 내보내기
