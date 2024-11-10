import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatLog from './chatLog';
import './sidebar.css';

const Sidebar = ({ setIsSidebarOpen }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        console.log("홈 버튼 클릭됨!");
    };

    const handleNewChatClick = () => {
        navigate('/first_new_login'); // first_new_login 페이지로 리다이렉트
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>내 계정</h2>
                <button className="new-chat-button" onClick={handleNewChatClick}>새 채팅</button>
                <button className="close-button" onClick={() => setIsSidebarOpen(false)}>닫기</button>
            </div>
            <ChatLog />
            <button className="home-button" onClick={handleHomeClick}>홈</button>
        </div>
    );
};

export default Sidebar;
