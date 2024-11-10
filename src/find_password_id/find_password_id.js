import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'firebase/auth';
import './find_password_id.css';

const FindIdAndPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('find-id'); // 아이디 찾기/비밀번호 찾기 탭 상태

  // 이메일 형식 검사
  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // 아이디 찾기 처리
  const handleFindId = async () => {
    const auth = getAuth();
    if (!validateEmail(email)) {
      setError('유효한 이메일을 입력해주세요.');
      return;
    }

    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length === 0) {
        setError('이메일에 해당하는 계정이 없습니다.');
      } else {
        setMessage('이메일을 확인해주세요.');
      }
    } catch (error) {
      setError('아이디 찾기 중 오류가 발생했습니다.');
    }
  };

  // 비밀번호 찾기 처리
  const handleFindPassword = async () => {
    const auth = getAuth();
    if (!validateEmail(email)) {
      setError('유효한 이메일을 입력해주세요.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('비밀번호 재설정 이메일을 보냈습니다.');
    } catch (error) {
      setError('이메일을 보내는 데 실패했습니다.');
    }
  };

  return (
    <div className="auth-container">
      <h2>{activeTab === 'find-id' ? '아이디 찾기' : '비밀번호 찾기'}</h2>
      
      <div className="tabs">
        <button 
          className={activeTab === 'find-id' ? 'active' : ''} 
          onClick={() => setActiveTab('find-id')}
        >
          아이디 찾기
        </button>
        <button 
          className={activeTab === 'find-password' ? 'active' : ''} 
          onClick={() => setActiveTab('find-password')}
        >
          비밀번호 찾기
        </button>
      </div>
      
      <input
        type="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />

      {activeTab === 'find-id' ? (
        <button onClick={handleFindId} className="auth-button">아이디 찾기</button>
      ) : (
        <button onClick={handleFindPassword} className="auth-button">비밀번호 찾기</button>
      )}

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FindIdAndPassword;
