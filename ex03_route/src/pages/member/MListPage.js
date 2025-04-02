import MListCom from '../../components/member/MListCom';
import MListCon from '../../containers/member/MListCon';
import { useNavigate } from 'react-router-dom';
function MListPage() {
    const navigate = useNavigate();
    const indexBtn = () => {
        navigate("/");
    }
    const beforeBtn = () => {
        navigate(-1);
    }
    return (
        <>
            {/* <MListCom indexBtn={indexBtn} beforeBtn={beforeBtn} /> */}
            <MListCon />
            
        </>
    )
}   
export default MListPage;
