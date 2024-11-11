import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch 대신 Routes 사용
import './App.css';
import Login from "./loginPage/login"; // Login 컴포넌트 임포트
import MainPage from "./main_page/main_page"; // MainPage 컴포넌트 임포트
import FirstNewLogin from './first_new_login/first_new_login';
import MainChatPage from './main_chat_page/main_chat_page';
import Management from './management/management';
import Stats from './stats/stats';
import FindIdAndPassword from './find_password_id/find_password_id';
import QuizPage from './quizzPage/quizzPage';


// app.js는 라우터 기능을 하고 있으므로 절대 변경금지
// 라우팅하는 자리
function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Switch를 Routes로 변경 */}
          <Route path="/" element={<MainPage />} /> {/* 메인 페이지 경로 */}
          <Route path="/login" element={<Login />} /> {/* 로그인 페이지 경로 */}
          <Route path="/first_new_login" element={<FirstNewLogin />} /> {/* 처음 서비스 시작 페이지 */}
          <Route path="/chat" element={<MainChatPage />} /> {/* 채팅 페이지 경로 */}
          <Route path="/management" element={<Management />} /> {/* 회원가입 */}
          <Route path="/stats" element={<Stats />} /> {/* 통계 */}
          <Route path="/findpassword" element={<FindIdAndPassword />} /> {/* 아이찾기 */}
          <Route path="/quizz" element={<QuizPage />} /> {/* 퀴즈 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
