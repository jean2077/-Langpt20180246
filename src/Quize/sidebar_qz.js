import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar_qz.css';
import ChatLog_qz from './chatLog_qz'; // 올바른 이름으로 import

const Sidebar_qz = ({ setIsSidebarOpen }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        console.log("홈 버튼 클릭됨!");
    };

    const handleNewChatClick = () => {
        navigate('/first_new_login'); // first_new_login 페이지로 리다이렉트
    };

    return (
        <div className="sidebar_qz">
            <div className="sidebar-header_qz">
                <h2>내 계정</h2>
                <button className="new-chat-button_qz" onClick={handleNewChatClick}>새 채팅</button>
                <button className="close-button_qz" onClick={() => setIsSidebarOpen(false)}>닫기</button>
            </div>
            {/* ChatLog_qz 컴포넌트 렌더링 */}
            <ChatLog_qz />
            <button className="home-button_qz" onClick={handleHomeClick}>홈</button>
        </div>
    );
};

export default Sidebar_qz;
