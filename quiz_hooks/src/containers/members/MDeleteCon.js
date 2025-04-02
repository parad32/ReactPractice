import { useSearchParams } from 'react-router-dom';
import { deleteMember } from '../../service/member/member';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MDeleteCon() {
    const params = useParams();
    console.log("params",params);
    deleteMember(params.id); // id 삭제하는 함수
    
    const navigate = useNavigate();
    useEffect(() => {
        console.log("삭제완료");
        navigate("/member/list");
    },[]);

    return null;
}   
export default MDeleteCon;
