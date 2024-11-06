import React, { useState } from 'react';
import './realquizes.css'; // 스타일 파일 경로
import Sidebar_rq from './sidebar_rq'; 

const Realquize = () => {
  const totalPages = 5; // 총 페이지 수 (예시로 5페이지)
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // 사이드바 상태

  // 페이지를 클릭했을 때 호출되는 함수
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // 페이지 번호 목록 생성
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  // 사이드바 열기
  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  // 사이드바 닫기
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  // 퀴즈 답안에 따른 페이지 변경 (정답/오답 클릭 시)
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      // 정답을 맞췄을 때는 현재 페이지를 +1
      setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : totalPages));
    } else {
      // 오답을 클릭하면 페이지를 그대로 두거나, 다른 동작을 추가할 수 있습니다.
      // 여기서는 페이지 변경을 하지 않음
      setCurrentPage((prevPage) => (prevPage));
    }
  };

  return (
    <div className="big_box">
      {/* 사이드바 토글 */}
      {isSidebarOpen ? (
        <Sidebar_rq setIsSidebarOpen={setIsSidebarOpen} />
      ) : (
        <button className="open-sidebar-button_rq" onClick={handleOpenSidebar}>
          사이드바 열기
        </button>
      )}

      <div className="big_box_rtg">
        {/* 퀴즈 내용 */}
        <div className="real_quize_box_rq" onClick={() => handleAnswerClick(true)}>
          <div className="real_quize_china_rq">중국어 퀴즈</div>
        </div>
        <div className="true_word_box_rq" onClick={() => handleAnswerClick(true)}>
          <div className="true_word_rq">场照</div>
        </div>
        <div className="fale_word_box_rq" onClick={() => handleAnswerClick(false)}>
          <div className="fale_word_rq">创造</div>
        </div>
      </div>

      {/* 페이지네이션 박스 */}
      <div className="page_box_rq">
        {/* 이전 페이지 버튼 */}
        <button 
          onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)} 
          disabled={currentPage === 1}
        >
          이전
        </button>

        {/* 페이지 번호 버튼 */}
        {pages.map(page => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            style={{ fontWeight: page === currentPage ? 'bold' : 'normal' }}
          >
            {page}
          </button>
        ))}

        {/* 다음 페이지 버튼 */}
        <button 
          onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)} 
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>

      {/* 페이지 정보 */}
      <div className="next_box_rq">
        <p>{`${totalPages} 페이지 중 ${currentPage} 페이지`}</p>
      </div>
    </div>
  );
};

export default Realquize;
