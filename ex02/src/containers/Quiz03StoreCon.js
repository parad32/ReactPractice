import Quiz03StoreCom from "../components/Quiz03StoreCom";
import { useState } from "react";
function Quiz03StoreCon() {

    const [store, setStore] = useState(
        {msg : "", inData : 0 , outData : 0}
    );

    const inBtn = () => {
        setStore({...store, inData : store.inData + 1});
    }
    const outBtn = () => {
        if(store.inData - store.outData > 0){
            setStore({...store, outData : store.outData + 1});
        }else{
            alert("나갈 손님이 없습니다");
        }
    }
    

    return (
        <>
        <Quiz03StoreCom store={store} inBtn={inBtn} outBtn={outBtn} />
        </>
    )
}
export default Quiz03StoreCon;
