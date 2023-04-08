import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // 변수가 변하더라도 자동으로 재렌더링 

function App() {

  let [글제목, 글제목변경] = useState(['리액트','자바스크립트','Node Js']); // useState(보관할 자료) 
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">

         <h3 style = {{color: 'white', fontSize: '16px'}} >승민's 블로그</h3> 
      </div>

      
      {/* // 글제목[0] = 'Node js'; 이렇게 원본 데이터에서 수정하는 것보다 
      // [...] 이렇게 작성해야 함 -> state 변경함수가 새로 적용됨 
       // [...] 이렇게 작성해야 함 -> state 변경함수가 새로 적용됨 
       // 기존 state 값을 신규 state인 copy로 갈아치움, 기존 state가 arr/object면 독립적 copy를 만들어서 수정해야 함
       
      // 기존 state 값을 신규 state인 copy로 갈아치움, 기존 state가 arr/object면 독립적 copy를 만들어서 수정해야 함 */}
      
  
     <button onClick={()=> {

      let copy = [...글제목]; 
      copy.sort(); 
      글제목변경(copy)
     }}>'가나다순 정렬'</button>


     <div className="list">
      <h4> { 글제목[0] } <button onClick={ ()=>{ 따봉변경(따봉 + 1) } } >좋아요👍</button> { 따봉 }</h4>
      <p> 4.19일 </p>
      </div>

      <div className="list">
        <h4> { 글제목[1] } <button onClick={ ()=>{ 따봉변경(따봉 + 1) } } >좋아요👍</button> { 따봉 }</h4>
        <p> 6.12일</p>
      </div>

      <div className="list">
        <h4> { 글제목[2] } <button onClick={ ()=>{ 따봉변경(따봉 + 1) } } >좋아요👍</button> { 따봉 }</h4>
        <p> 5.5일</p>
      </div>
      
      <Modal></Modal>

</div>

 );
}

// 컴포넌트 - 모달 함수, 다른 함수 바깥에 만들것 
// 컴포넌트는 반복적인 html 축약할 때 사용 
// 큰 페이지를 전환할 때
// 자주 변경되는 것들


function Modal(){

  return(
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;