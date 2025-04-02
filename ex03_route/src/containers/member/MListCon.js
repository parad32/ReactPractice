import MListCom from '../../components/member/MListCom';
import { useState } from 'react';
import { getList } from '../../service/member/member';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function MListCon() {
    const [list, setList] = useState([]);
    
    // setList(getList());
    // console.log("start")
    useEffect(() => {
        setList(getList());
        console.log("MListCon useEffect() 호출됨");
    },[])

    const navigate = useNavigate();
    const onDelete = (id) => {
        // alert(id+"삭제");
        navigate("/member/delete/"+id);
    }

    return (
        <div>   
            <MListCom list={list} onDelete={onDelete}/>
        </div>
    )
}       
export default MListCon;
