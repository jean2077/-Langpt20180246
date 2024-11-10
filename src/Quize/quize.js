// Quize.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './quize.css';
import Sidebar_qz from './sidebar_qz'; // Sidebar 컴포넌트
import Logo_qz from './logo_qz'; // Logo_qz 컴포넌트 임포트

function Quize() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수 사용

    const handleOpenSidebar = () => {
        setIsSidebarOpen(true);
    };

    const handleStudyBoxClick = () => {
        navigate('/stats'); // Stats 페이지로 이동
    };

    const handleGoToRealQuizesClick = () => {
        navigate('/realquizes'); // realquizes 페이지로 이동
    };

    return (
        <div className="Quize">
            {isSidebarOpen ? (
                <Sidebar_qz setIsSidebarOpen={setIsSidebarOpen} /> // Sidebar 컴포넌트
            ) : (
                <button className="open-sidebar-button" onClick={handleOpenSidebar}>
                    사이드바 열기
                </button>
            )}

            {/* Logo 컴포넌트 삽입 */}
            <Logo_qz />

            <div className="user_name_qz">안녕하세요! oo님</div>
            <div className="middle_box_qz">
                <div className="middle_box_content">마지막으로 공부한 날: 2024-10-23 오후 1시 48분 12일전</div>
                <div className="more_than_qz">"오늘의 고난은 내일의 성공으로 이어진다"</div>
                <div className="quote_qz">-Nelson Mandela-</div>

                <div className="main_quize_box_qz">
                    <div className="main_quize_box_content_today_qz">오늘의 단어는?</div>
                    <div className="main_quize_box_content_today_word_qz">场照</div>
                </div>

                <div className="word_box_qz">
                    <div className="today_word_qz">오늘의 단어</div>
                    <div className="today_word_chian_qz">창조하다</div>
                </div>

                <div className="how_study_box_qz" onClick={handleStudyBoxClick}>
                    <div className="how_study_box_content_qz">얼마나 공부헀을까요?</div>
                </div>

                <button className="go-to-realquizes-button_box_qz" onClick={handleGoToRealQuizesClick}>
                    <div className="go-to-realquizes-button_content_qz">단어퀴즈로</div>
                </button>
            </div>
        </div>
    );
}

export default Quize;
