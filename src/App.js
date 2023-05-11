import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // 변수가 변하더라도 자동으로 재렌더링 

function App() {

  let [글제목, 글제목변경] = useState(['리액트','자바스크립트','Node Js','Mogo DB']); // useState(보관할 자료) 
  let [따봉, 따봉변경] = useState([0,0,0,0]);

  let [modal, setModal] = useState(false); // ui상태 열림true/닫힘false 
  let [title, setTitle] = useState(0); //0이면 0번째 제목 
  // map 함수를 이용하여 반복 작업 줄임 
  let [입력값, 입력값변경] = useState(''); // 유저가 입력한 값을 input에 저장 

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

{ // array 갯수만큼 반복  
  // 반복 생성한 ui마다 각각의 다른 key값을 설정해줘야 함
  // map 반복문으로 반복생성한 html엔 key={i} 이런 속성을 추가해야 함.
  // a라는 파라미터는 map이 반복될 때마다 array자료 안에 있던 하나하나의 데이터들을 의미
  // <span onClick={(e) => { e.stopPropagation(); } 해주면 이벤트버블링(상위 태그까지 실행되는) 해결 
  
  // 입력값변경(e.target.value); 
  // state 변경함수 작업은 늦게 처리되기 때문에 console.log(입력값)을 먼저 실행
  // 따라서 a 값은 출력 안되고 aa값부터 출력 
  글제목.map(function(a, i){
            return (
              <div className="list" key={i}> 
            <h4 onClick={()=> {setModal(!modal); setTitle(i) } }>{글제목[i]} </h4> 
                <h4>
                  <button onClick={(e)=> { 
                  let copy = [...따봉];
                  copy[i] = copy[i]+ 1; 
                  따봉변경(copy)
                  }}>좋아요👍</button> {따봉[i]}
                </h4>
                 <p> 6.12일</p> 

              

             </div>
            )
          })
        }


       <input onChange={(e)=>{입력값변경(e.target.value); 
      console.log(입력값) }} />
{
        
        modal == true ? <Modal title={title} 글제목={글제목}/> : null 
        }
       
        
</div>

      
 );
}

// EventHandler --> onChange 값 입력때마다 console.log(값) 출력 
//onMouseOver 마우스 갔다대면 값 출력
//onScroll 스크롤 할 때마다 값을 출력 


// 컴포넌트 - 모달 함수, 다른 함수 바깥에 만들것 
// 컴포넌트는 반복적인 html 축약할 때 사용 
// 큰 페이지를 전환할 때
// 자주 변경되는 것들

// props를 통해 전송
// Modal 함수 
function Modal(props){
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
     
    </div>
  )
}

export default App;
