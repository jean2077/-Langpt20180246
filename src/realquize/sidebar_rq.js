import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar_rq.css';
import ChatLog_rq from './chatLog_rq'; // 올바른 이름으로 import

const Sidebar_rq = ({ setIsSidebarOpen }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        console.log("홈 버튼 클릭됨!");
    };

    const handleNewChatClick = () => {
        navigate('/first_new_login'); // first_new_login 페이지로 리다이렉트
    };

    return (
        <div className="sidebar_rq">
            <div className="sidebar-header_rq">
                <h2>내 계정</h2>
                <button className="new-chat-button_rq" onClick={handleNewChatClick}>새 채팅</button>
                <button className="close-button_rq" onClick={() => setIsSidebarOpen(false)}>닫기</button>
            </div>
            {/* ChatLog_rq 컴포넌트 렌더링 */}
            <ChatLog_rq />
            <button className="home-button_rq" onClick={handleHomeClick}>홈</button>
        </div>
    );
};

export default Sidebar_rq;
