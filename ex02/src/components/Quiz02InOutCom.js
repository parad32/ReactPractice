function Quiz02InOutCom({s,i,o}) {

    return (
        <>
            <h1>{s === "" ? "값이 존재하지 않음" : s}</h1>
            <button onClick={i}>in</button>
            <button onClick={o}>out</button>
        </>
    )
}
export default Quiz02InOutCom;
