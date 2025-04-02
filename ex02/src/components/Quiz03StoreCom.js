function Quiz03StoreCom({store, inBtn, outBtn}) {
    return (
        <>
        <h1>
        {store.inData === 0 && store.outData === 0 ? <h3>오픈 전 입니다</h3> :
        <h5>in number{store.inData}
        <br/>
        out number{store.outData}
        <br/>
        in - out : {store.inData - store.outData}
        </h5>
        } 
        {/* in - out : + (store.inData - store.outData)} */}

        </h1>
        <button onClick={inBtn}>IN</button>
        <button onClick={outBtn}>OUT</button>
        </>
    )
}
export default Quiz03StoreCom;
