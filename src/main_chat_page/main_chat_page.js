import React, { useState } from 'react';
import './main_chat_page.css';
import Sidebar from './sidebar';
import axios from 'axios';  // axios 추가

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

    const handleSendMessage = async () => {
        if (userInput.trim() === "") return;

        // 사용자 메시지 추가
        const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setUserInput("");

        try {
            // GPT API에 사용자 메시지 전달
            const response = await axios.post('https://callgptapi-bv7og3hfsa-uc.a.run.app', {
                prompt: userInput
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // GPT의 응답을 메시지로 추가
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'bot', text: response.data.choices[0].message.content }
            ]);
        } catch (error) {
            console.error('Error calling GPT API:', error);
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'bot', text: "죄송합니다. 문제가 발생했습니다. 다시 시도해 주세요." }
            ]);
        }
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
