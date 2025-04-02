import { useState } from "react";
/*
component : 최종적으로 화면을 그리는 용도

containers: 함수 , 연산등 모든 값들을 components 전달 후화면 표현

*/
function StateTest01() {
    let num = 100;
    const [number, setNumber] = useState(0);
    console.log("start :", num);
    const click = () => {
        num = num + 1;
        setNumber(number + 1);
        console.log("click :", num);
    }
    return (<>
        num : {number}<br/>
        <button onClick={click}>클릭</button>
        <br/>
        number : {number}<br/>
        <button onClick={() => setNumber(number + 1)}>클릭</button>     
    </>)
}

export default StateTest01; 
