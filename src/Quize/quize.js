import React, { useState } from 'react';
import './quize.css';
import Sidebar_qz from './sidebar_qz'; // Sidebar_qz 컴포넌트를 올바르게 import
//import { useNavigate } from 'react-router-dom';

function Quize() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleOpenSidebar = () => {
        setIsSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };
    //const handleStudyBoxClick = () => {
        //navigate('/study'); // 이동할 경로 설정 (예: "/study")
   // };

    return (
        <div className="Quize">
            {isSidebarOpen ? (
                <Sidebar_qz setIsSidebarOpen={setIsSidebarOpen} /> // 올바른 Sidebar_qz 컴포넌트 사용
            ) : (
                <button className="open-sidebar-button" onClick={handleOpenSidebar}>
                    사이드바 열기
                </button>
            )}

            <div className="user_name_qz">안녕하세요! oo님</div>
            <div className="middle_box_qz">
                <div className="middle_box_content">마지막으로 공부한 날: 2024-10-23 오후 1시 48분 12일전</div>
                <div className="more_than_qz">네가 왜 약한지 아느냐?</div>
                <div className="quote_qz">증오가 부족하기 때문이다...</div>
                <div className="main_quize_box_qz">
                    <div className="main_quize_box_content_today_qz">오늘의 단어는?</div>
                    <div className="main_quize_box_content_today_word_qz">db에서 받아올 오늘의 단어</div>
                </div>
                <div className="word_box_qz">
                    <div className="today_word_qz">오늘의 단어</div>
                    <div className="today_word_chian_qz">db 오늘의 중국어</div>
                </div>
                <div className="how_study_box_qz">
                    <div className="how_study_box_content_qz">왜안나오는데</div>
                </div>
            </div>
        </div>
    );
}

export default Quize;
