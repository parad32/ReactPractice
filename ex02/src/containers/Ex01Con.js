import Ex01Com from "../components/Ex01Com";
import { useState } from "react";
function Ex01Con() {

    // let num = 100;
    const [num, setNum] = useState(100);

    const click = () => {
        // num = num + 1;
        setNum(num + 1);
        console.log(num);
    }

    return (
        <>
            <Ex01Com click={click} num={num} />
        </>
    )
}
export default Ex01Con;
