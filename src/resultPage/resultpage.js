import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate import
import './resultpage.css';
import Sidebar_rp from './sidebar_rp';

function ResultPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleOpenSidebar = () => {
        setIsSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    // "돌아가기" 버튼 클릭 시 Quize 페이지로 이동하는 함수
    const handleReturnToQuize = () => {
        navigate('/quize'); // Quize 페이지의 경로로 이동
    };

    return (
        <div>
            {isSidebarOpen ? (
                <Sidebar_rp setIsSidebarOpen={setIsSidebarOpen} /> // Sidebar 컴포넌트
            ) : (
                <button className="open-sidebar-button" onClick={handleOpenSidebar}>
                    사이드바 열기
                </button>
            )}
            
            <div className="user_name_rp">안녕하세요! DB님</div>
            <div className="result_box_rp">
                <div className="result_cgl_coment_rp">축하합니다</div>
                <div className="result_correct_rp">DB개 맞추셨습니다</div>
                <div className="more_than_rp">더 공부해라</div>

                {/* 돌아가기 버튼 클릭 시 Quize 페이지로 이동 */}
                <div className="return_quize_rp" onClick={handleReturnToQuize}>
                    돌아가기
                </div>
            </div>
        </div>
    );
}

export default ResultPage;
