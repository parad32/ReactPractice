import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Test from './aaa';
import Main from './Main';
import Ex01 from './Ex01';

function App() {
  const num = 100;
  console.log("num: " + num);

  const click = () => {
    alert("click test");
  }

  return (<>
  <Ex01/>
  {num === 100 ? "T":"F"}<br/>
  {num === 100 && "참인경우 실행"}<br/>
  num : {num}<br/>
    <Header test= "연습중" number = {num}/>
    <Nav name = "홍길동" addr = "산골짜기" /><hr/>
    <Main myClick={click}  tel ="010-1234-1234" nick="도적" />
    
  </>
  );
}

export default App;
