import Input01Com from "../../components/form/Input01Com";
import { useState } from "react"

const Input01Con = () => { //const 말고 function이어도 상관 없음
    const [input,setInput] = useState({ username : '', password : ''})

    const onChange = (e) => {
        console.log(e.target)
        console.log(e.target.value)
        setInput({...input, [e.target.name] : e.target.value})
    }

    // 페이지 이동을 제한함.
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submit : ", input)
    }
    return(<><Input01Com input={input} onSubmit={onSubmit} onChange={onChange} /></>)
}
export default Input01Con;