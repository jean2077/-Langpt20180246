import React, { useState } from 'react';
import './stats.css'; // CSS 파일 경로
import Sidebar_st from './sidebar_st'; 
import Logo_st from './logo_st'
function Stats() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleOpenSidebar = () => {
      setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
      setIsSidebarOpen(false);
  };

  return (
    <div>
      {isSidebarOpen ? (
        <Sidebar_st setIsSidebarOpen={setIsSidebarOpen} /> // Sidebar 컴포넌트
      ) : (
        <button className="open-sidebar-button" onClick={handleOpenSidebar}>
            사이드바 열기
        </button>
      )}
          <Logo_st />
      <div className="how_long_study_time_st">얼마나 공부했을까요?</div>
      <div className="use_week_chat_box_st">
        <div className="use_week_chat_number_content_st">일주일동안 사용한 채팅 수</div>
        <div className="use_week_chat_number_content_circle_grapgh_st">일주일채팅그래프DB</div>
        <div className="use_week_chat_number_content_gn_st">일주일채팅그래프기반숫자DB</div>
        <div className="use_week_chat_number_content_5959_st">일주일채팅그래프기반칭찬DB</div>
      </div>
      <div className="use_days_chat_box_st">
        <div className="use_days_chat_number_content_st">일일 평균 사용시간</div>
        <div className="use_days_chat_number_content_bar_grapgh_st">일일채팅그래프DB</div>
        <div className="use_days_chat_number_content_number_st">일일채팅총시간표현DB</div>
      </div>
      <div className="use_all_chat_box_st">
        <div className="use_all_chat_number_content_time_st">당신의 총 학습시간</div>
        <div className="use_all_chat_number_content_number_st">채팅총시간표현DB</div>
        <div className="use_all_chat_number_content_gayG_grapgh_st">총채팅그래프DB</div>
        <div className="use_all_chat_number_content_5959_st">총채팅그래프기반칭찬DB</div>
        <div className="use_all_chat_number_content_5959_more_st">총채팅어때요DB</div>
      </div>
      <div className="you_study_same_time_coment_st">당신이 총 학습한 시간으로...</div>
      <div className="you_study_same_time_box_st">
        <div className="you_study_same_time_img_st">차라리~이미지DB</div>
        <div className="you_study_same_do_it_st">차라리~명사DB</div>
        <div className="you_study_same_do_ing_st">차라리~설명DB</div>
      </div>
      <div className="more_than_play_box_st">
        <div className="more_than_play_img_st">대충공부하는이미지DB</div>
        <div className="more_than_play_content_st">대충공부자극글귀DB</div>
      </div>
    </div>
  );
}

export default Stats;
