import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push, set } from 'firebase/database'; // Realtime Database 관련 함수 import
import { getFirestore, doc, setDoc } from 'firebase/firestore'; // Firestore 관련 함수 import
import './chatLog.css';

const ChatLog = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [chatCount, setChatCount] = useState(0); // 채팅 수 상태 관리

    // 리얼타임 데이터베이스에서 메시지를 실시간으로 가져오는 useEffect
    useEffect(() => {
        const database = getDatabase();
        const messagesRef = ref(database, 'messages'); // 'messages' 경로에서 데이터 가져오기

        const unsubscribe = onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const formattedMessages = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setMessages(formattedMessages);
                setChatCount(formattedMessages.length); // 메시지 수 업데이트
            }
        });

        // 클린업 함수
        return () => unsubscribe();
    }, []);

    // 메시지를 Firebase에 저장하는 함수
    const handleSendMessage = () => {
        if (userInput.trim() === "") return;

        const database = getDatabase();
        const messagesRef = ref(database, 'messages'); // 'messages' 경로에서 데이터 가져오기

        // 새로운 메시지를 추가
        const newMessageRef = push(messagesRef);
        set(newMessageRef, {
            sender: 'user',
            text: userInput,
            timestamp: Date.now()
        });

        // 입력 필드 초기화
        setUserInput('');
    };

    // 파이어스토어에 채팅 수 저장
    const saveChatCountToFirestore = async () => {
        const db = getFirestore();
        const statsRef = doc(db, 'stats', 'chatStats'); // Firestore의 'stats' 컬렉션의 'chatStats' 문서 참조

        try {
            // 파이어스토어에 채팅 수 저장
            await setDoc(statsRef, {
                totalChatCount: chatCount,
                lastUpdated: new Date() // 마지막 업데이트 시간
            });

            console.log('채팅 수가 Firestore에 저장되었습니다.');
        } catch (error) {
            console.error('Firestore에 채팅 수 저장 실패:', error);
        }
    };

    // 파이어스토어에 채팅 수 저장을 주기적으로 업데이트 (예: 1초마다)
    useEffect(() => {
        if (chatCount > 0) {
            saveChatCountToFirestore();
        }
    }, [chatCount]); // chatCount가 업데이트될 때마다 Firestore에 저장

    return (
        <div className="chat-log">
            {/* 채팅 메시지 렌더링 */}
            {messages.map((msg) => (
                <div key={msg.id} className={`chat-message ${msg.sender}`}>
                    <strong>{msg.sender === 'bot' ? '메이린' : msg.sender}:</strong> {msg.text}
                </div>
            ))}

            {/* 사용자 메시지 입력 */}
            <div className="chat-input-section">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    className="chat-input"
                />
                <button onClick={handleSendMessage} className="send-button">전송</button>
            </div>

            {/* 채팅 수 출력 */}
            <div className="chat-stats">
                <h3>채팅 수: {chatCount}</h3>
            </div>
        </div>
    );
};

export default ChatLog;
