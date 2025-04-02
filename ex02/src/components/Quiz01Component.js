function Quiz01Component({num,click, click2, num2 , click3}) {


    return (
        <>
            <h1>num : {num}</h1>
            <button onClick={click}>+</button>
            <button onClick={click2}>-</button>
            <h1>num2 : {num2}</h1>
            <button onClick={click3}>누적</button>
            
        </>
    )
}
export default Quiz01Component;
