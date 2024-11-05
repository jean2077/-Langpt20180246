import React from 'react';

const messages = [
    { id: 1, text: "안녕하세요!", date: "2024-11-01" },
    { id: 2, text: "어제도 잘 지냈어요?", date: "2024-11-01" },
    { id: 3, text: "최근에는 어떻게 지내세요?", date: "2024-11-01" },
    { id: 4, text: "일주일 전에도 연락했었죠?", date: "2024-10-29" },
    { id: 5, text: "한달 전에는 좀 바빴어요.", date: "2024-10-01" },
];

const ChatLog = () => {
    // 날짜별로 메시지를 그룹화
    const groupedMessages = messages.reduce((acc, message) => {
        const date = new Date(message.date).toLocaleDateString(); // 날짜 포맷
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(message);
        return acc;
    }, {});

    return (
        <div className="chat-log">
            {Object.keys(groupedMessages).map(date => (
                <div key={date}>
                    <h4>{date}</h4> {/* 날짜 표시 */}
                    {groupedMessages[date].map(msg => (
                        <div key={msg.id} className="chat-message">
                            {msg.text}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ChatLog;
