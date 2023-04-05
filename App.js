import logo from './logo.svg';
import './App.css';

function App() {


  let post = '의류 브랜드'; 

  return (
    <div className="App">
      <div className="black-nav">
      <div>
        <h4>안녕하세요. </h4>
        <h3 style = {{color: 'red', fontSize: '16px'}} >승민의 BLOG</h3>
      </div>

      <h4> {post}</h4>
    
      
    </div>
    </div>
  );
}

export default App;
