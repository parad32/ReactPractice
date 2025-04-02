import MListCom from '../../components/member/MListCom';
import { useState } from 'react';
import { getMemberList } from '../../service/member/member';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteMember } from '../../service/member/member';
function MListCon() {
    const [list, setList] = useState([]);
    useEffect(() => {
        setList(getMemberList());
    },[]);
    const navigate = useNavigate();
    const handleDelete = (id) => {
        deleteMember(id);
        navigate("/member/list");
        alert("삭제되었습니다");
    }
    return (
        <div>
            <MListCom list={list} onDelete={handleDelete}/>
        </div>
    )
}       
export default MListCon;
