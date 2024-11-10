import React, { useState } from 'react';
import { auth, signInWithGooglePopup } from '../firebase';  // Firebase Authentication import
import { getFirestore, doc, setDoc, updateDoc } from 'firebase/firestore';  // Firestore 관련 함수 import
import { useNavigate } from 'react-router-dom';  // react-router-dom에서 useNavigate 가져오기
import './login.css';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

    // 이메일 로그인 처리
    const handleEmailLogin = async () => {
        try {
            // 이메일 로그인
            const userCredential = await auth.signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // 이메일 인증 여부 확인
            if (!user.emailVerified) {
                setErrorMessage('이메일 인증을 완료해주세요.');
                return;
            }

            console.log('이메일 로그인 성공', user);

            // Firestore에서 해당 사용자의 문서에 last_login_time 필드를 추가/업데이트
            const db = getFirestore();
            const userDocRef = doc(db, "users", user.uid);
            await updateDoc(userDocRef, {
                last_login_time: new Date() // 현재 시간을 저장
            });

            // 로그인 후, 첫 번째 페이지로 리디렉션
            navigate('/first_new_login');
        } catch (error) {
            setErrorMessage(error.message);
            console.log('이메일 로그인 실패', error.message);
        }
    };

    // 구글 로그인 처리
    const handleGoogleLogin = async () => {
        try {
            const userCredential = await signInWithGooglePopup(auth);
            const user = userCredential.user; // 구글 로그인 후 사용자 정보 가져오기

            console.log('구글 로그인 성공', user);

            // Firestore에 사용자 정보 저장
            const db = getFirestore();
            const userDocRef = doc(db, "users", user.uid);
            await setDoc(userDocRef, {
                email: user.email,           // 이메일
                name: user.displayName,      // 사용자 이름
                profile_picture: user.photoURL, // 프로필 사진
                join_date: new Date(),       // 가입 날짜
                last_active: new Date(),     // 마지막 활동 날짜
                last_login_time: new Date(), // 로그인 시간 추가
                total_study_time: 0,         // 초기 학습 시간
                total_quiz_score: 0,         // 초기 퀴즈 점수
            });

            console.log('사용자 정보가 Firestore에 저장되었습니다.');

            // 로그인 성공 후, first_new_login 페이지로 리디렉션
            navigate('/first_new_login');
        } catch (error) {
            setErrorMessage(error.message);
            console.log('구글 로그인 실패', error.message);
        }
    };

    return (
        <div className="container">
            <div className="hello_2">안녕하세요! hello! 你好！</div>

            {/* 로그인 박스 */}
            <div className="chat_ractangle2">
                <input
                    type="email"
                    placeholder="이메일을 입력하세요!"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
                {/* 이메일 로그인 버튼 */}
                <button className="google-button" onClick={handleEmailLogin}>
                    이메일로 로그인
                </button>

                {/* 구글 로그인 버튼 */}
                <button className="google-button" onClick={handleGoogleLogin}>
                    구글로 간편로그인
                </button>

                {/* 오류 메시지 */}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                {/* 기타 링크 */}
                <div className="auth-container">
                    <a href="findId" className="auth-link">아이디 찾기</a>
                    <a href="/findId" className="auth-link">비밀번호 찾기</a>
                    <a href="/management" className="newmember-button">회원가입</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
