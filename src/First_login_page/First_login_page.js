import React from 'react';
import { Link } from 'react-router-dom';
import './First_login_page.css'; // CSS 파일 임포트

const Firstloginpage = () => {
    return (
        <div className="div">
            <img className="rectangle-33" src="rectangle-330.svg" alt="Rectangle 33" />
            <div className="rectangle-2"></div>
            <div className="hello">안녕하세요! 你好! hello!</div>
            <div className="talk_box"></div>
            <img className="talk_ballon1" src="group-20.svg" alt="Talk Balloon 1" />
            <img className="talk_ballon2" src="group-30.svg" alt="Talk Balloon 2" />
            <div className="talk1">안녕하세요 선생님!</div>
            <div className="talk2">
                안녕하세요. 혜성학생 오늘은 중국어의
                <br />
                把자문에 대해 알아보겠어요
            </div>
            <div className="choice_box"></div>
            <div className="Choice_content">언어를 가르쳐 줄 선생님을 선택해보세요</div>
            <div className="gentle_box" onClick={() => window.location.href = '<!-- 여기에 URL을 추가하세요 -->'}>
                <div className="gentle_content">상냥한 펜팔친구</div>
            </div>
            <img className="gentle_panda_background" src="rectangle-340.svg" alt="Gentle Panda Background" />
            <div className="Panda" onClick={() => window.location.href = '<!-- 여기에 URL을 추가하세요 -->'}>
                푸바오
            </div>
            <div className="bad_teacher" onClick={() => window.location.href = '<!-- 여기에 URL을 추가하세요 -->'}>
                엄격한 선생님
            </div>
            <div className="start_box" onClick={() => window.location.href = '<!-- 여기에 URL을 추가하세요 -->'}>
                <div className="start_box_content">이제 즐거운 언어 학습을 시작해볼까요!</div>
            </div>
        </div>
    );
};

export default Firstloginpage;
