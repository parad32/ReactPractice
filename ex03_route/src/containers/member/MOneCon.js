import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOne } from '../../service/member/member';
import { useEffect } from 'react';
import MOneCom from '../../components/member/MOneCom';
import { deleteList } from '../../service/member/member';
function MOneCon() {
    const [user, setUser] = useState();
    const params = useParams();
    useEffect(() => {
        setUser(getOne(params.id));
    },[params.id]);
    const deleteMember = () => {
        deleteList(params.id);
    }
    return (
        <div>
            <MOneCom user={user} deleteMember={deleteMember}/>
        </div>
    )
}       
export default MOneCon;
