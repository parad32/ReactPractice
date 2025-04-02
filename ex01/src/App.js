import Child from './Child';
import Site from './Site'
function App() {
    const a_tag=[
        {txt: "네이버" , href: "http://www.naver.com/"},
        {txt: "다음" , href: "http://www.daum.net/"},
        {txt: "구글" , href: "http://www.google.com/"},
    ]
    return<> 
    <Child name = "홍길동">
        {"데이터 전송01"}{"데이터 전송02"}{"데이터 전송03"}
        </Child>

    {/*<Site a_tag = {a_tag} />*/}
  
  </>
  }
  export default App;
  