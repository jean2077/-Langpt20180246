import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar_rp.css';
import ChatLog_rp from './chatLog_rp';

const Sidebar_rp = ({ setIsSidebarOpen }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        console.log("홈 버튼 클릭됨!");
    };

    const handleNewChatClick = () => {
        navigate('/first_new_login'); // first_new_login 페이지로 리다이렉트
    };

    return (
        <div className="sidebar_rp">
            <div className="sidebar-header_rp">
                <h2>내 계정</h2>
                <button className="new-chat-button_rp" onClick={handleNewChatClick}>새 채팅</button>
                <button className="close-button_rp" onClick={() => setIsSidebarOpen(false)}>닫기</button>
            </div>
            {/* ChatLog_qz 컴포넌트 렌더링 */}
            <ChatLog_rp />
            <button className="home-button_rp" onClick={handleHomeClick}>홈</button>
        </div>
    );
};

export default Sidebar_rp;
