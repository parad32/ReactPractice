import MOneCom from '../../components/member/MOneCom';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMemberOne } from '../../service/member/member';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteMember } from '../../service/member/member';

function MOneCon() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        setUser(getMemberOne(id));
    },[id]);
    
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteMember(user.id);
        navigate("/member/list");
        alert("삭제되었습니다");
    }
    
    return (
        <div>
            <MOneCom user={user} onDelete={handleDelete}/>      
        </div>
    )
}       
export default MOneCon;
