import { useState } from "react";
import Quiz02InOutCom from "../components/Quiz02InOutCom";
function Quiz02InOutCon() {
    const [str, setStr] = useState("");
   
    const in1 = () => {
        setStr("어서오세요");
    }
    const out1 = () => {
        setStr("안녕히 가세요");
    }
    
    return (
        <>
            <Quiz02InOutCom s={str} i={in1} o={out1} />
        </>
    )
}
export default Quiz02InOutCon;
