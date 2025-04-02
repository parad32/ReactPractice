function UseRef04Com({input, onChange, onSubmit, inputId, inputPw, inputRef}) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                {/* <input type = "text" ref ={inputId} value={input.username}
                    name="username" onChange={onChange} placeholder="username"/> <br/>
                <input type = "text" ref ={inputPw} value={input.password}
                    name="password" onChange={onChange} placeholder="password"/> <br/> */}
                    <input type = "text" ref ={e => inputRef.current[0] = e} value={input.username}
                    name="username" onChange={onChange} placeholder="username"/> <br/>
                <input type = "text" ref ={e => inputRef.current[1] = e} value={input.password}
                    name="password" onChange={onChange} placeholder="password"/> <br/>
                <button>submit</button>
            </form>
        </div>
    )
}   
export default UseRef04Com
