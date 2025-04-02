function Main({ myClick,tel, nick}) {
    console.log("tel: " + tel);
    console.log("nick: " + nick);
    return<div>
    <h5>
        tel : {tel}<br/>
        nick : {nick}<br/>
        main 영역
    </h5>
    <button onClick={myClick}>클릭</button><br/>
    </div>
}
export default Main;