import MSignUpCom from "../../components/member/MSignUpCom";
import { useState, useRef } from "react";
import { addOne } from "../../service/member/member";
import { useNavigate } from "react-router-dom";
function MSignUpCon() {
    const [input, setInput] = useState({});
    const inputRef = useRef([]);
    const navigate = useNavigate();
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
        if(input.pwd !== input.pwd2){
            alert("password is not match")
            inputRef.current[2].value = "";
            inputRef.current[2].focus();
            return;
        }

        const result = addOne(input);
        if (result.success) {
            alert(result.message);
            
            navigate("/member/list");   
            // 폼 초기화
            setInput({});
            inputRef.current.forEach(ref => ref.value = "");
        } else {
            alert(result.message);
        }
    }
    return (
        <div>
            <MSignUpCom input={input} onChange={onChange} onSubmit={onSubmit} inputRef={inputRef} />
        </div>
    )
}       
export default MSignUpCon;
