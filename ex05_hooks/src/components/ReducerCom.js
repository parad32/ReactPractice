function ReducerCom( {state, onUp, onDown} ) {
    return (
        <div>
           {state.value}<br/>
           <button onClick={onUp}>+</button>
           <button onClick={onDown}>-</button>
        </div>
    )
}   

export default ReducerCom;