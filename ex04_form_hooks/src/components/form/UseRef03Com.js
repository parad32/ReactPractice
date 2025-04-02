function UseRef03Com({num, number, onState, onRef}) {
    return (
        <div>
            state : {num} <br/>
            ref : {number.current} <br/>
            <button onClick={onState}>state</button>
            <button onClick={onRef}>ref</button>
        </div>
    )
}   
export default UseRef03Com