import logo from './logo.svg';
import './App.css';
import Login from "../loginPage/login"; // Login 컴포넌트 임포트
import Management from "../Management/Manage";
  return (
    <div className="App">
       <Login /> {/* Login 컴포넌트 사용 */}

      <div class="hello">안녕하세요! hello! 你好！</div>  
      <div class="ballon_left">안녕하세요! 혜성학생
        오늘은 우리 把자문에 대해 배워볼까요? </div>
      
      <div class="polygon"></div>
      <div class="rectangle"></div>
      <div class="ballon_right">선생님 안녕하세요!</div>
      <div class="chat_ractangle"></div>
      <div class="long_rectangle"></div>
      <div class="long_in_rectangle">여기를 눌러 무료로 사용해보세요</div>
    </div>
  );


export default App;
