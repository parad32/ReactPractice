import UseRef04Com from "../../components/form/UseRef04Com";
import { useState, useRef } from "react";

const init ={username:"", password:""};
function UseRef04Con() {
    const [input, setInput] = useState(init);
    const inputId = useRef();
    const inputPw = useRef();
    const onChange = (e) => {
        setInput({...input, [e.target.name]:e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(input.username ===""){
            alert("username is empty");
            inputId.current.focus()
        }else if(input.password ===""){
            alert("password is empty");
            inputPw.current.focus()
        }else{
            //모든 데이터 입력후 전송송
        }
       
        
    }
    return (
        <div>
            
            <UseRef04Com input = {input}
                        onChange = {onChange}
                        onSubmit = {onSubmit}
                        inputId = {inputId}
                        inputPw = {inputPw}/>
        </div>
    )
}   
export default UseRef04Con