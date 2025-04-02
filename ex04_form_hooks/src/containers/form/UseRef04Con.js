import UseRef04Com from "../../components/form/UseRef04Com";
import { useState, useRef } from "react";

const init ={username:"", password:""};

function UseRef04Con() {
    const [input, setInput] = useState(init);
    const inputId = useRef();
    const inputPw = useRef();
    const inputRef = useRef([]);

    const onChange = (e) => {
        setInput({...input, [e.target.name]:e.target.value});
    }
    const onSubmit = (e) => {
        e.preventDefault();

        for(let i = 0; i < inputRef.current.length; i++){
            if(inputRef.current[i].value ===""){
                alert(inputRef.current[i].name + " is empty")
                inputRef.current[i].focus();
                return;
            }
        }
        
        // if(input.username ===""){
        //     alert("username is empty");
        //     inputId.current.focus()
        // }else if(input.password ===""){
        //     alert("password is empty");
        //     inputPw.current.focus()
        // }else{
        //     //모든 데이터 입력후 전송송
        // }
       
        
    }
    return (
        <div>
            
            <UseRef04Com input = {input}
                        onChange = {onChange}
                        onSubmit = {onSubmit}
                        inputId = {inputId}
                        inputPw = {inputPw}
                        inputRef = {inputRef}/>
        </div>
    )
}   
export default UseRef04Con