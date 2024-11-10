import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './realquizes.css';
import Sidebar_rq from './sidebar_rq';
import Logo_rp from '../resultPage/logo_rp';

const Realquize = () => {
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [answerStatus, setAnswerStatus] = useState(Array(totalPages).fill(null)); // 각 페이지별 선택 상태를 null로 초기화
  const navigate = useNavigate();

  // Firestore에 정답 여부 저장 함수
  const saveAnswerToDatabase = async (isCorrect) => {
    try {
      await firebase.firestore().collection('quizAnswers').add({
        page: currentPage,
        isCorrect: isCorrect,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.error("Error saving answer: ", error);
    }
  };

  // 정답 버튼 클릭 핸들러
  const handleAnswerClick = async (isCorrect) => {
    await saveAnswerToDatabase(isCorrect);

    setAnswerStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[currentPage - 1] = isCorrect ? 'true' : 'false'; // 현재 페이지의 선택 상태 업데이트
      return newStatus;
    });

    // 다음 페이지로 이동 (마지막 페이지가 아닐 때)
    if (currentPage < totalPages) {
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
      }, 1000);
    }
  };

  // 완료 버튼 클릭 핸들러
  const handleCompleteClick = () => {
    navigate('/resultpage');
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const allPagesSelected = answerStatus.every((status) => status !== null); // 모든 페이지가 선택되었는지 확인

  return (
    <div className="big_box">
      {isSidebarOpen ? (
        <Sidebar_rq setIsSidebarOpen={setIsSidebarOpen} />
      ) : (
        <button className="open-sidebar-button_rq" onClick={() => setIsSidebarOpen(true)}>
          사이드바 열기
        </button>
      )}
        <Logo_rp/>
      <div className="big_box_rtg">
        <div className="real_quize_box_rq">
          <div className="real_quize_china_rq">창조하다는 중국어로?</div>
        </div>

        {/* 정답 및 오답 버튼 */}
        <button 
          className={`true_word_box_rq ${answerStatus[currentPage - 1] === 'true' ? 'selected' : ''}`}
          onClick={() => handleAnswerClick(true)}
        >
          <div className="true_word_rq">场照</div>
        </button>
        
        <button 
          className={`fale_word_box_rq ${answerStatus[currentPage - 1] === 'false' ? 'selected' : ''}`}
          onClick={() => handleAnswerClick(false)}
        >
          <div className="fale_word_rq">创造</div>
        </button>

        
        
          {/* 완료 버튼 (모든 페이지에서 선택이 완료되었을 때 마지막 페이지에서만 표시) */}
          

          
         
        
      </div>

      {/* 페이지네이션 박스 */}
      <div className="page_box_rq">
        <button 
          onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)} 
          disabled={currentPage === 1}
        >
          이전
        </button>

        {pages.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{ fontWeight: page === currentPage ? 'bold' : 'normal' }}
          >
            {page}
          </button>
        ))}

        <button 
          onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)} 
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>

      <div className="next_box_rq">
        <p>{`${totalPages} 페이지 중 ${currentPage} 페이지`}</p>
      </div>
      {currentPage === totalPages && allPagesSelected && (
            <button className="complete_button_box_rq" onClick={handleCompleteClick}>
              <div className='complete_button_content_rq'>결과 보기
              </div>

            </button>
            
          )}

    </div>
  );
};

export default Realquize;
