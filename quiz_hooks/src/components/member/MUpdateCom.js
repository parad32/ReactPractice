import { useEffect } from 'react';

function MUpdateCom({input, onChange, onSubmit, inputRef}) {
    // 컴포넌트가 마운트될 때 inputRef.current 배열 초기화
    useEffect(() => {
        if (!inputRef.current.length) {
            inputRef.current = new Array(4).fill(null);
        }
    }, []);

    console.log("input", input);    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="id" value={input.id} onChange={onChange} placeholder="input id" ref={e => inputRef.current[0] = e} readOnly /> <br/>
                <input type="text" name="pwd" value={input.pwd} onChange={onChange} placeholder="input pwd" ref={e => inputRef.current[1] = e} /> <br/>
                <input type="text" name="name" value={input.name} onChange={onChange} placeholder="input name" ref={e => inputRef.current[2] = e} /> <br/>
                <input type="text" name="addr" value={input.addr} onChange={onChange} placeholder="input addr" ref={e => inputRef.current[3] = e} /> <br/>
                <button>수정정</button>
            </form>
        </div>
    )
}   
export default MUpdateCom;

