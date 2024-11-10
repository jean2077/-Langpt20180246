import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatLog from './chatLog';
import './sidebar.css';

const Sidebar = ({ setIsSidebarOpen }) => {
    const navigate = useNavigate();

    // 마이페이지로 이동하는 함수 수정
    const handleHomeClick = () => {
        navigate('/stats');  // /stats 페이지로 리다이렉트
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
            {/* 마이페이지 버튼 클릭 시 /stats로 리다이렉트 */}
            <button className="home-button" onClick={handleHomeClick}>마이 페이지</button>
        </div>
    );
};

export default Sidebar;
