import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch 대신 Routes 사용
import './App.css';
import Login from "../loginPage/login"; // Login 컴포넌트 임포트
import MainPage from "../main_page/main_page.js"; // MainPage 컴포넌트 임포트

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Switch를 Routes로 변경 */}
          <Route path="/" element={<MainPage />} /> {/* 메인 페이지 경로 */}
          <Route path="/login" element={<Login />} /> {/* 로그인 페이지 경로 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

