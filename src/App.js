import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // 변수가 변하더라도 자동으로 재렌더링 

function App() {

  let [글제목, b] = useState(['리액트','자바스크립트','프론트엔드']); // useState(보관할 자료) 
   //let [따봉, 따봉변경] = useState(0); // c는 state 변경 함수 
   let [따봉, 따봉변경] = useState(0);




  return (
    <div className="App">
      <div className="black-nav">

         <h3 style = {{color: 'white', fontSize: '16px'}} >승민's 블로그</h3> 
      </div>

      <div className="list">
      <h4> {글제목[0]} <span onClick ={ () =>{따봉변경(따봉+1) }}>👍</span> 
      {따봉} </h4>
        <p> 4.6일</p>
      </div>

      <div className="list">
        <h4> { 글제목[1] } </h4>
        <p> 6.12일</p>
      </div>

      <div className="list">
        <h4> { 글제목[2] } </h4>
        <p> 5.5일</p>
      </div>

    </div>

  );
}

export default App;