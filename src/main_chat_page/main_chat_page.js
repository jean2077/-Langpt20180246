import React, { useState, useEffect, useRef } from 'react';
import { database } from '../firebase';  // firebase.js에서 database 가져오기
import { ref, set, push } from 'firebase/database';  // Firebase Realtime Database 함수
import './main_chat_page.css';
import Sidebar from './sidebar';
import axios from 'axios';  // axios 추가

function MainChatPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const chatLogRef = useRef(null);  // 채팅 로그를 참조할 ref 추가

    const handleOpenSidebar = () => {
        setIsSidebarOpen(true);
    };

    const handleSendMessage = async () => {
        if (userInput.trim() === "") return;

        // 사용자 메시지 추가
        const timestamp = Date.now();
        const newMessages = [...messages, { sender: 'user', text: userInput, timestamp }];
        setMessages(newMessages);
        setUserInput("");

        try {
            // Firebase Realtime Database에 사용자 메시지 저장
            const messagesRef = ref(database, 'messages');
            const newMessageRef = push(messagesRef);
            set(newMessageRef, {
                sender: 'user',
                text: userInput,
                timestamp
            });

            // GPT API에 사용자 메시지 전달
            const response = await axios.post('https://callgptapi-bv7og3hfsa-uc.a.run.app', {
                prompt: userInput
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // GPT의 응답을 메시지로 추가
            const botTimestamp = Date.now();
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'bot', text: response.data.choices[0].message.content, timestamp: botTimestamp }
            ]);
            
            // GPT 응답을 Firebase에 저장
            const newBotMessageRef = push(messagesRef);
            set(newBotMessageRef, {
                sender: 'bot',
                text: response.data.choices[0].message.content,
                timestamp: botTimestamp
            });

        } catch (error) {
            console.error('Error calling GPT API:', error);
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'bot', text: "죄송합니다. 문제가 발생했습니다. 다시 시도해 주세요.", timestamp: Date.now() }
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

    // 메시지가 변경될 때마다 채팅창을 자동으로 맨 아래로 스크롤
    useEffect(() => {
        if (chatLogRef.current) {
            chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
        }
    }, [messages]);  // 메시지가 변경될 때마다 실행

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
                <div className="chat-log_main" ref={chatLogRef}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                        >
                            <div className="message-meta">
                                <strong>{message.sender === 'bot' ? '메이린' : '사용자'}</strong>
                                <span className="timestamp">
                                    {new Date(message.timestamp).toLocaleTimeString('ko-KR', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </span>
                            </div>
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
