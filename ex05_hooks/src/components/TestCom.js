function TestCom({onPlus,onSub,num}) {
    return (
        <div>
            <h1>TestCom</h1>
            <h2>num : {num}</h2>
            <button onClick={onPlus}>Plus</button>
            <button onClick={onSub}>Sub</button>
        </div>
    )
}   

export default TestCom;