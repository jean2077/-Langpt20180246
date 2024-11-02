import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './quizes.css'; // CSS 파일 경로 수정

function Quizes() {
    const [username, setUsername] = useState(""); // 로그인한 사용자 이름
    const [lastStudyDate, setLastStudyDate] = useState(""); // 마지막 공부한 날짜
    const [dailyWord, setDailyWord] = useState(""); // 오늘의 단어
    const [dailyChianWord, setDailyChianWord] = useState(""); // 오늘의 중국어 단어
    const [chatRooms, setChatRooms] = useState([]); // 채팅방 정보
    const [quizData, setQuizData] = useState([]); // 퀴즈 데이터
    const [quote, setQuote] = useState(""); // 프로이트의 격언

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('API_URL/user');
                const data = await response.json();
                setUsername(data.username);
            } catch (error) {
                console.error("사용자 정보를 가져오는 데 오류가 발생했습니다:", error);
            }
        };

        const fetchLastStudyDate = async () => {
            try {
                const response = await fetch('API_URL/lastStudyDate');
                const data = await response.json();
                setLastStudyDate(data.lastStudyDate);
            } catch (error) {
                console.error("마지막 공부한 날짜를 가져오는 데 오류가 발생했습니다:", error);
            }
        };

        const fetchDailyWord = async () => {
            try {
                const response = await fetch('API_URL/dailyWord');
                const data = await response.json();
                setDailyWord(data.dailyWord);
                setDailyChianWord(data.dailyChianWord);
            } catch (error) {
                console.error("오늘의 단어를 가져오는 데 오류가 발생했습니다:", error);
            }
        };

        const fetchChatRooms = async () => {
            try {
                const response = await fetch('API_URL/chatRooms');
                const data = await response.json();
                setChatRooms(data);
            } catch (error) {
                console.error("채팅방 정보를 가져오는 데 오류가 발생했습니다:", error);
            }
        };

        const fetchQuote = async () => {
            try {
                const response = await fetch('API_URL/quote');
                const data = await response.json();
                setQuote(data.quote);
            } catch (error) {
                console.error("격언을 가져오는 데 오류가 발생했습니다:", error);
            }
        };

        fetchUserData();
        fetchLastStudyDate();
        fetchDailyWord();
        fetchChatRooms();
        fetchQuote();
    }, []);

    // "얼마나 공부했을까?" 버튼 클릭 핸들러
    const handleStudyTimeClick = () => {
        window.location.href = '특정페이지의_URL.html'; // 특정 웹페이지로 이동
    };

    return (
        <div className="div">
            <div className="oo">
                안녕하세요! <span id="username">{username}</span>님
            </div>
            
            <div className="LastStudyDate">
                <div className="LastStudyDateBox">
                    <span className="_2024-10-23-1-48-12">{lastStudyDate}</span>
                </div>
            </div>

            <div className="MoreThan">그 정도로는 늘지 않아요 더 열심히 해보세요</div>
            <div className="Quote">{quote} - 프로이트</div>
            
            <div className="Today_Quize">
                <div className="rectangle-47">
                    <div className="div4">{dailyWord}는 중국어로?</div>
                    <div className="div5">오늘의 퀴즈</div>
                </div>
            </div>

            {/* "얼마나 공부했을까?" 버튼 */}
            <div className="div11">
                <button className="studyTimeButton" onClick={handleStudyTimeClick}>
                    얼마나 공부했을까?
                </button>
            </div>

            {/* 나머지 컴포넌트들... */}
        </div>
    );
}

export default Quizes;
