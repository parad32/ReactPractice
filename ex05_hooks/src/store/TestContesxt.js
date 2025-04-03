import { createContext, useState } from "react";

const TestContext = createContext(); //저장소 생성
const TestProvider =({children})=>{
    const [num , setNum] = useState(0);
    const clickPlus = ()=>{
        setNum(num+1)
    }
    const clickSub = ()=>{
        setNum(num-1)
    }
    const value = {num,clickPlus,clickSub}
    
    return(<>
    <TestContext.Provider value={value}>
        {children} 
    </TestContext.Provider>
    </>)
}

export { TestContext };
export default TestProvider;
