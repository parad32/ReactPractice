import { useEffect } from 'react';
import { useState } from 'react';
import { deleteMember } from '../../service/member/member';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function MOneCom({user}) {
    const [isDeleted, setIsDeleted] = useState(false);
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteMember(user.id);
        navigate("/member/list");
        alert("삭제되었습니다");
        
    }
    
    useEffect(() => {
        if(isDeleted) {
            window.location.href = '/member/list';
        }
    }, [isDeleted]);
    
    return (
        <div>
            {user &&
            <div>
                id : {user.id}<br/>
                pwd : {user.pwd}<br/>
                name : {user.name}<br/>
                addr : {user.addr}<br/>
                <button onClick={handleDelete}>{user.id} 삭제 </button>
                <Link to ={`/member/delete/${user.id}`}>{user.id} 삭제 </Link>

            </div>
            }
        </div>
    )
}       
export default MOneCom; 
