import MUpdateCom from "../../components/member/MUpdateCom";
import { useState, useRef, useEffect } from "react";
import { updateOne, getOne } from "../../service/member/member";
import { useNavigate, useParams } from "react-router-dom";   
  
function MUpdateCon() {
    const [input, setInput] = useState({});
    const inputRef = useRef([]);
    const navigate = useNavigate();
    const { id } = useParams();

    // 컴포넌트 마운트 시 회원 정보 가져오기
    useEffect(() => {
        const member = getOne(id);
        if (member) {
            setInput(member);
        } else {
            alert("회원 정보를 찾을 수 없습니다.");
            navigate("/member/list");
        }
    }, [id, navigate]);

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
        const result = updateOne(input);
        if(result.success){
            alert(result.message);
            navigate("/member/list");
        }else{
            alert(result.message);
        }
    }   
    
    return (
        <div>
            <MUpdateCom input={input} onChange={onChange} onSubmit={onSubmit} inputRef={inputRef}  />
        </div>
    )
}   
export default MUpdateCon;
