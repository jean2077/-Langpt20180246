import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar_st.css';
import ChatLog_st from './chatLog_st'; // 올바른 이름으로 import
import Logo_st from './logo_st'

const Sidebar_st = ({ setIsSidebarOpen }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        console.log("홈 버튼 클릭됨!");
    };

    const handleNewChatClick = () => {
        navigate('/first_new_login'); // first_new_login 페이지로 리다이렉트
    };

    return (
        <div className="sidebar_st">
            <div className="sidebar-header_st">
                <h2>내 계정</h2>
                <button className="new-chat-button_st" onClick={handleNewChatClick}>새 채팅</button>
                <button className="close-button_st" onClick={() => setIsSidebarOpen(false)}>닫기</button>
            </div>
            {/* ChatLog_qz 컴포넌트 렌더링 */}
            <ChatLog_st />
            <button className="home-button_st" onClick={handleHomeClick}>홈</button>
        </div>
    );
};

export default Sidebar_st;
