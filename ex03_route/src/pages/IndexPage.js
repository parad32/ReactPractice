import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
function IndexPage() {
    const [num,setNum] = useState(0);
    useEffect(() => {
        console.log("IndexPage useEffect");
    },[]);
    const onClick = () => {
        setNum(num+1);
    }
    return (
        <div>
            IndexPage
            <button onClick={onClick}>IndexPage</button>
            {num}
        </div>
    )
}   
export default IndexPage;
