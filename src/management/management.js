import React, { useState } from 'react';
import { auth, createUserWithEmail, sendVerificationEmail } from '../firebase'; // 수정된 import
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import { getFirestore, query, where, getDocs, collection, doc, setDoc, Timestamp } from 'firebase/firestore'; // Firestore에서 필요한 함수들 import
import './management.css';


function Management() {
  const navigate = useNavigate(); // useNavigate 훅 호출
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');  // 닉네임 필드 상태
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // 인증 링크 성공 메시지
  const [passwordVisible, setPasswordVisible] = useState(false); // 비밀번호 보이기/숨기기 상태
  const [emailAvailable, setEmailAvailable] = useState(true); // 이메일 중복 여부 상태
  const [emailChecked, setEmailChecked] = useState(false); // 이메일 중복 확인 여부 상태

  // 이메일 형식 체크
  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // 비밀번호 규칙 체크
  const validatePassword = (password) => {
    // 최소 8자리, 대소문자, 숫자, 특수문자 포함
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  // 이메일 중복 확인 함수
  const checkEmailAvailability = async () => {
    const q = query(collection(getFirestore(), "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) {
      setEmailAvailable(false); // 이메일이 중복되면 중복 상태로 설정
    } else {
      setEmailAvailable(true); // 이메일이 중복되지 않으면 사용 가능 상태로 설정
    }
    setEmailChecked(true); // 이메일 중복 확인 완료 상태
  };

  // 이메일 인증과 사용자 생성 함수
  const handleConfirmClick = async (e) => {
    // 이메일이 비어있는지 확인
    if (!email) {
      setErrorMessage('이메일을 입력해주세요.');
      return;
    }

    // 이메일 형식 검사
    if (!validateEmail(email)) {
      setErrorMessage('유효한 이메일 형식이 아닙니다.');
      return;
    }

    // 이메일 중복 체크가 안 됐으면 중복 확인 버튼을 눌러야 한다는 메시지 표시
    if (!emailChecked) {
      setErrorMessage('이메일 중복 확인을 해주세요.');
      return;
    }

    if (!emailAvailable) {
      setErrorMessage('이미 사용된 이메일입니다.');
      return;
    }

    // 비밀번호와 비밀번호 확인이 일치하는지 체크
    if (password !== confirmPassword) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 비밀번호 규칙 검사
    if (!validatePassword(password)) {
      setErrorMessage('비밀번호는 최소 8자리, 숫자, 대소문자, 특수문자를 포함해야 합니다.');
      return;
    }

    // 비밀번호가 비어 있지 않은지 체크
    if (!password) {
      setErrorMessage('비밀번호를 입력하세요.');
      return;
    }

    // 닉네임 중복 확인
    const q = query(collection(getFirestore(), "users"), where("nickname", "==", nickname));
    const querySnapshot = await getDocs(q);
    if (!nickname) {
      setErrorMessage('닉네임을 입력해주세요.');
      return;
    }
    if (querySnapshot.size > 0) {
      setErrorMessage('이 닉네임은 이미 사용 중입니다.');
      return;
    }

    try {
      // Firebase에서 사용자 생성
      const userCredential = await createUserWithEmail(auth, email, password);
      const user = userCredential.user;

      // 이메일 인증 보내기
      await sendVerificationEmail(user);
      console.log('이메일 인증이 전송되었습니다.');

      // 인증 링크 전송 메시지 표시
      setSuccessMessage('인증 링크가 전송되었습니다. 이메일을 확인해주세요.');

      // Firestore에 사용자 정보 저장
      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email,         // 이메일
        nickname: nickname,        // 닉네임
        join_date: Timestamp.now(),// 가입 날짜
        last_active: Timestamp.now(), // 마지막 로그인 날짜 (현재 시간)
        current_streak: 0,         // 초기 스트릭
        highest_streak: 0,         // 초기 최고 스트릭
        total_study_time: 0,       // 초기 총 학습 시간
        total_quiz_score: 0,       // 초기 퀴즈 점수
        last_quiz_score: 0,        // 마지막 퀴즈 점수
      });

      console.log('사용자 정보가 Firestore에 저장되었습니다.');

      // 회원가입 후 로그인 페이지로 리디렉션
      setTimeout(() => {
        navigate('/login'); // 로그인 페이지로 이동
      }, 3000);  // 3초 후에 로그인 페이지로 이동

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('이미 사용된 이메일입니다.');
      } else {
        setErrorMessage(error.message); // 다른 오류 메시지 설정
      }
      console.log('회원가입 실패', error.message);
    }
  };

  // 비밀번호 보이기/숨기기 토글 함수
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      {/* 인사말 텍스트 */}
      <div className="hello_mangement">
        <span>안녕하세요! 你好! Hello!</span>
      </div>

      <div className="form-container">
        {/* 이메일 입력 */}
        <div className="input-group">
          <span>이메일</span>
          <input
            type="email"
            placeholder="이메일을 입력하세요!"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" onClick={checkEmailAvailability} className="email-check-button">
            중복 확인
          </button>
        </div>

        {/* 이메일 중복 확인 메시지 */}
        {!emailAvailable && emailChecked && <p className="error-message">이미 사용된 이메일입니다.</p>}
        {emailAvailable && emailChecked && <p className="success-message">사용 가능한 이메일입니다.</p>}

        {/* 닉네임 입력 */}
        <div className="input-group">
          <span>닉네임</span>
          <input
            type="text"
            placeholder="닉네임을 입력하세요"
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="input-group password-container">
          <span>비밀번호</span>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="비밀번호를 입력하세요"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="password-toggle"
          >
            보기
          </button>
        </div>

        {/* 비밀번호 확인 */}
        <div className="input-group password-container">
          <span>비밀번호 확인</span>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="비밀번호를 다시 입력하세요"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* 오류 메시지 표시 */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* 성공 메시지 표시 */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* 확인 버튼 */}
        <button className="confirm-button" onClick={handleConfirmClick}>
          확인
        </button>

        
      </div>
      <div class="background"></div>

    </div>
  );
}

export default Management;
