import UseRef03Com from "../../components/form/UseRef03Com";
import { useState, useRef } from "react";
function UseRef03Con() {
    const [num,setNum] = useState(0);
    const number = useRef(0);
    console.log("start")
    const onState = () => { setNum(num+1); }
    const onRef = () => { number.current = number.current + 1;
        console.log("number :", number.current);
     }
    return (
        <div>
            
            <UseRef03Com num = {num}
                        number = {number}
                        onState = {onState}
                        onRef = {onRef}/>
        </div>
    )
}   
export default UseRef03Con