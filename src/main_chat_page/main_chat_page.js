import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; // 전달받은 상태를 가져오기 위한 React Router 훅
import { database } from '../firebase'; // Firebase 데이터베이스 가져오기
import { ref, set, push } from 'firebase/database'; // Firebase Realtime Database 함수
import './main_chat_page.css'; // 스타일 시트 임포트
import Sidebar from './sidebar'; // 사이드바 컴포넌트
import axios from 'axios'; // GPT API 호출을 위한 axios 라이브러리

function MainChatPage() {
    const location = useLocation(); // React Router를 통해 전달된 상태 가져오기
    const teacherName = location.state?.teacherName || "선생님"; // 전달받은 선생님 이름 (기본값: "선생님")

    // 사이드바 상태 관리
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // 채팅 메시지 상태 관리
    const [messages, setMessages] = useState([]);

    // 사용자 입력 상태 관리
    const [userInput, setUserInput] = useState("");

    // 채팅 로그 스크롤 관리를 위한 ref
    const chatLogRef = useRef(null);

    // 사이드바 열기 함수
    const handleOpenSidebar = () => {
        setIsSidebarOpen(true);
    };

    // 메시지 전송 함수
    const handleSendMessage = async () => {
        if (userInput.trim() === "") return; // 빈 입력일 경우 무시

        // 사용자 메시지 추가
        const timestamp = Date.now();
        const newMessages = [...messages, { sender: 'user', text: userInput, timestamp }];
        setMessages(newMessages); // 메시지 상태 업데이트
        setUserInput(""); // 입력창 초기화

        try {
            // Firebase에 사용자 메시지 저장
            const messagesRef = ref(database, 'messages');
            const newMessageRef = push(messagesRef);
            set(newMessageRef, {
                sender: 'user',
                text: userInput,
                timestamp,
            });

            // GPT API 호출
            const response = await axios.post('https://callgptapi-bv7og3hfsa-uc.a.run.app', {
                prompt: userInput,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // GPT 응답 메시지 추가
            const botTimestamp = Date.now();
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'bot', text: response.data.choices[0].message.content, timestamp: botTimestamp },
            ]);

            // Firebase에 GPT 응답 저장
            const newBotMessageRef = push(messagesRef);
            set(newBotMessageRef, {
                sender: 'bot',
                text: response.data.choices[0].message.content,
                timestamp: botTimestamp,
            });

        } catch (error) {
            // API 호출 실패 시 에러 처리
            console.error('Error calling GPT API:', error);
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'bot', text: "죄송합니다. 문제가 발생했습니다. 다시 시도해 주세요.", timestamp: Date.now() },
            ]);
        }
    };

    // Enter 키로 메시지 전송
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // 기본 Enter 동작 방지
            handleSendMessage(); // 메시지 전송 호출
        }
    };

    // 메시지가 변경될 때마다 채팅창 자동 스크롤
    useEffect(() => {
        if (chatLogRef.current) {
            chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="MainChatPage">
            {/* 채팅 제목에 선택한 선생님 이름 표시 */}
            <h1>{teacherName}와의 채팅</h1>
            
            {/* 사이드바 표시 여부 */}
            {isSidebarOpen && (
                <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
            )}
            
            {/* 사이드바 열기 버튼 */}
            {!isSidebarOpen && (
                <button className="open-sidebar-button" onClick={handleOpenSidebar}>
                    사이드바 열기
                </button>
            )}

            {/* 채팅 영역 */}
            <div className={`chat_ractangle_mainChat ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                {/* 채팅 로그 */}
                <div className="chat-log_main" ref={chatLogRef}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                        >
                            {/* 메시지 메타 정보 */}
                            <div className="message-meta">
                                <strong>{message.sender === 'bot' ? teacherName : '사용자'}</strong>
                                <span className="timestamp">
                                    {new Date(message.timestamp).toLocaleTimeString('ko-KR', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </span>
                            </div>
                            {/* 메시지 내용 */}
                            {message.text}
                        </div>
                    ))}
                </div>

                {/* 입력창 및 전송 버튼 */}
                <div className="chat-input-section">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)} // 입력 상태 업데이트
                        onKeyDown={handleKeyDown} // Enter 키 이벤트 처리
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
