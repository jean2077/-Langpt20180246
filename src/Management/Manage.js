import React from 'react';
import { Link } from 'react-router-dom';
import './Manage.css'; /*여기에 추가*/
    function Management() {
        return (
          <div>
            {/* 인사말 텍스트 */}
            <div className="greeting-text">
              <span>안녕하세요! 你好! Hello!</span>
            </div>
      
            <div className="form-container">
              {/* 이메일 입력 */}
              <div className="input-group">
                <span>이메일</span>
                <input type="email" placeholder="이메일을 입력하세요! ex) hello@gmail.com" required />
              </div>
              
              {/* 아이디 입력 */}
              <div className="input-group">
                <span>아이디</span>
                <input type="text" placeholder="아이디를 입력하세요" required />
              </div>
              
              {/* 비밀번호 입력 */}
              <div className="input-group">
                <span>비밀번호</span>
                <input type="password" placeholder="비밀번호를 입력하세요" required />
              </div>
              
              {/* 비밀번호 확인 */}
              <div className="input-group">
                <span>비밀번호 확인</span>
                <input type="password" placeholder="비밀번호를 다시 입력하세요" required />
              </div>
              
              {/* 닉네임 입력 */}
              <div className="input-group">
                <span>닉네임</span>
                <input type="text" placeholder="닉네임을 입력하세요" required />
              </div>
      
              {/* 전화번호 입력 */}
              <div className="input-group">
                <span>전화번호</span>
                <input type="tel" placeholder="전화번호를 입력하세요" required />
                {/* 확인 버튼 */}  
                <button className="confirm-button">확인</button> 
              </div>
            </div>
          </div>
        );
      }
      export default Management; // 반드시 default로 내보내야 함