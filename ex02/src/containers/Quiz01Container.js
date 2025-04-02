import { useState } from "react";
import Quiz01Component from "../components/Quiz01Component";
function Quiz01Container() {
    // let num = 0;

    
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(1);
    const click = () => {
        setNum(num + 1);
    }
    const click2 = () => {
        setNum(num - 1);
    }
    const click3 = () => {  
        setNum2(num2*num);
    }

    // const click2 = () => {
        // minus(num - 1);  
    // }

    return (
        <>
            <Quiz01Component num={num} click={click} click2={click2} num2={num2} click3={click3} />
        </>
    )
}
export default Quiz01Container;
