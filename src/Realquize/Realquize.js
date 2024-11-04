import React from 'react';
import { Link } from 'react-router-dom';
import './Realquize.css'; // 스타일링 파일 import

const Realquiz = () => {
  return (
    <div className="div">
      <div className="user_name3">안녕하세요! oo님</div>
      <div className="component-1">
        <div className="go_to_main_box"></div>
        <div className="go_to_main_content">메인화면</div>
        <img className="home-02" src="home-020.svg" alt="Home" />
      </div>
      <div className="component-2">
        <div className="new_chat_box"></div>
        <div className="new_chat_content">새로운 채팅</div>
        <img className="message-plus-square" src="message-plus-square0.svg" alt="New Chat" />
      </div>
      <div className="component-3">
        <div className="last_study_days">
          1월 21 금 10: 24
          <br />
          2주전
        </div>
        <div className="chat_box"></div>
        <div className="chat_content">
          Hey, how was
          <br />
          your day?
        </div>
        <div className="user_name">Lilith</div>
        <div className="last_study_days1">
          1월 24 금 10: 24
          <br />
          하루전
        </div>
        <div className="chat_box2"></div>
        <div className="chat_content2">
          Hey, how was
          <br />
          your day?
        </div>
        <div className="user_name1">응애응애</div>
      </div>
      <div className="component-4">
        <div className="my_information_box"></div>
        <div className="my_information_content">내 정보</div>
        <img className="face-id-square" src="face-id-square0.svg" alt="Face ID" />
      </div>
      <div className="real_quize_box"></div>
      <img className="group-2" src="group-20.svg" alt="Group" />
      <div className="real_quize_china"></div>
      <div className="true_word">场照</div>
      <div className="korea_word">창조하다는 중국어로?</div>
      <div className="rectangle-17573"></div>
      <div className="fale_word">创造</div>
      <div className="page_box"></div>
      <div className="all_page">5</div>
      <div className="component-10">
        <div className="next_box"></div>
        <div className="next_box_content">다음으로</div>
      </div>
      <div className="line-5"></div>
      <div className="now_page">1</div>
    </div>
  );
};

export default Realquiz;