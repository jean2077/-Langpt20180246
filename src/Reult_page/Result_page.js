import React from 'react';
import { Link } from 'react-router-dom';
import './Result_page.css'; // 외부 CSS 파일 연결

const App = () => {
    return (
        <div className="div"> {/* 전체 콘텐츠를 감싸는 div */}
            <div className="user-name">안녕하세요! oo님</div> {/* 사용자에게 인사하는 텍스트 */}
            <div className="component-1"> {/* 첫 번째 컴포넌트 */}
                <div className="main-button"></div> {/* 사각형 배경 요소 */}
                <div className="main-buuton-content">메인화면</div> {/* '메인화면' 텍스트 */}
                <img className="home-02" src="home-020.svg" alt="홈 아이콘" /> {/* 홈 아이콘 이미지 */}
            </div>
            <div className="component-2"> {/* 두 번째 컴포넌트 */}
                <div className="new-chat-botton"></div> {/* 원형 배경 요소 */}
                <div className="new-chat-botton-content">새로운 채팅</div> {/* '새로운 채팅' 텍스트 */}
                <img className="message-plus-square" src="message-plus-square0.svg" alt="새로운 채팅 아이콘" /> {/* 새로운 채팅 아이콘 이미지 */}
            </div>
            <div className="component-3"> {/* 세 번째 컴포넌트, 최근 대화 정보 */}
                <div className="days-times"> {/* 날짜와 시간 표시 */}
                    1월 21 금 10: 24
                    <br />
                    2주전
                </div>
                <div className="last_message_rtg"></div> {/* 사각형 배경 요소 */}
                <div className="last_message"> {/* 가장 최근 대화 내용 */}
                    Hey, how was
                    <br />
                    your day?
                </div>
                <div className="users-name">Faker</div> {/* 대화 상대 이름 */}
                <div className="days-times2"> {/* 날짜와 시간 표시 */}
                    1월 24 금 10: 24
                    <br />
                    하루전
                </div>
                <div className="last_message_rtg2"></div> {/* 사각형 배경 요소 */}
                <div className="last_message2"> {/* 두 번째 최근 대화 내용 */}
                    Hey, how was
                    <br />
                    your day?
                </div>
                <div className="lilith2">T1</div> {/* 두 번째 대화 상대 이름 */}
            </div>
            <div className="component-4"> {/* 네 번째 컴포넌트 */}
                <div className="My_Information_box"></div> {/* 사각형 배경 요소 */}
                <div className="My_Information_content">내 정보</div> {/* '내 정보' 텍스트 */}
                <img className="face-id-square" src="face-id-square0.svg" alt="얼굴 인식 아이콘" /> {/* 얼굴 인식 아이콘 이미지 */}
            </div>
            <div className="result-box"></div> {/* 추가 배경 요소 */}
            <div className="result-box-message"> {/* 메시지 및 격려 메시지 */}
                작은 성취들은 결국 큰 변화를 만들어갑니다
                <br />
                앞으로 한걸음씩 천천히 함께해요!
            </div>
            <div className="how-many">N개 맞추셨습니다</div> {/* 맞춘 개수 표시 */}
            <div className="good-text">축하합니다!</div> {/* 축하 메시지 */}
        </div>
    );
};

export default App;
