import React, { useState } from 'react';
import './main_chat_page.css';
import Sidebar from './sidebar';
import ChatLog from './chatLog';
function MainChatPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");

    const handleOpenSidebar = () => {
        setIsSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleSendMessage = () => {
        if (userInput.trim() === "") return;

        const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setUserInput("");

        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: "안녕하세요 혜성학생! 오늘은 이합동사에 대해 배워볼까요?" }]);
        }, 1000);
    };

    // Enter 키가 눌렸을 때 메시지 전송
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // 기본 Enter 동작 방지
            handleSendMessage();
        }
    };

    return (
        <div className="MainChatPage">
            {isSidebarOpen && (
                <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
            )}
            {!isSidebarOpen && (
                <button className="open-sidebar-button" onClick={handleOpenSidebar}>
                    사이드바 열기
                </button>
            )}
            <div className={`chat_ractangle_mainChat ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <div className="chat-log_main">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="chat-input-section">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={handleKeyDown}  // Enter 키 이벤트 핸들러 추가
                        placeholder="메시지를 입력하세요..."
                        className="chat-input"
                    />
                    <button onClick={handleSendMessage} className="send-button">전송</button>
                </div>
            </div>
        </div>
    );
}

export default MainChatPage;
