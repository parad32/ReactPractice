import { useEffect } from 'react';

function MSignUpCom({input, onChange, onSubmit, inputRef}) {
  
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="id" value={input.id} onChange={onChange} placeholder="input id" ref={e => inputRef.current[0] = e} /> <br/>
                <input type="text" name="pwd" value={input.pwd} onChange={onChange} placeholder="input pwd" ref={e => inputRef.current[1] = e} /> <br/>
                <input type="text" name="pwd2" value={input.pwd2} onChange={onChange} placeholder="check pwd" ref={e => inputRef.current[2] = e} /> <br/>
                <input type="text" name="name" value={input.name} onChange={onChange} placeholder="input name" ref={e => inputRef.current[3] = e} /> <br/>
                <input type="text" name="addr" value={input.addr} onChange={onChange} placeholder="input addr" ref={e => inputRef.current[4] = e} /> <br/>
                <button>submit</button>
            </form>
        </div>
    )
}       
export default MSignUpCom;
