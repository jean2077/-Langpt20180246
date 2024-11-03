import React from 'react'; // React를 임포트
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Router 관련 임포트
import logo from './logo.svg';
import './App.css';
import Login from "../loginPage/login"; // Login 컴포넌트 임포트
import Management from "../Management/Manage"; // Management 컴포넌트 임포트
import QuizComponent from "../Quize/quizes"; // QuizComponent로 수정
import RealQuize from "../Realquize/Realquize"; // RealQuize 컴포넌트 임포트
import MainPage from "../main_page/main_page";
import Result_page from "../Reult_page/Result_page";
function App() {  // App 컴포넌트를 함수로 정의
    return (
        <Router> {/* Router로 감싸줍니다. */}
            <div className="App">
                <Routes> {/* Routes를 사용하여 경로 설정 */}
                    <Route path="/" element={<Login />} /> {/* 기본 경로에 Login 컴포넌트 */}
                    <Route path="/management" element={<Management />} /> {/* /management 경로에 Management 컴포넌트 */}
                    <Route path="/quizes" element={<QuizComponent />} /> {/* /quize 경로에 QuizComponent로 수정 */}
                    <Route path="/realquize" element={<RealQuize />} />
                </Routes>
                
                {/* 여기에 공통으로 보여줄 컴포넌트나 요소를 추가할 수 있습니다. */}
            </div>
        </Router>
    );
}

export default App;
