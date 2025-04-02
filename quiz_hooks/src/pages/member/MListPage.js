import MListCon from '../../containers/members/MListCon';
import { useNavigate } from 'react-router-dom';
function MListPage() {
    const navigate = useNavigate();
    const indexBtn = () => {
        navigate("/");
    }
    const beforeBtn = () => {
        navigate(-1);
    }
    
    return (<>        
    <MListCon indexBtn={indexBtn} beforeBtn={beforeBtn}/>
  </>  )
}   
export default MListPage;
