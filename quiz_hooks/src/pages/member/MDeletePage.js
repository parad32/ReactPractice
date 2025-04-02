import { useSearchParams } from 'react-router-dom';
import MDeleteCon from '../../containers/members/MDeleteCon';
function MDeletePage() {
    const [params] = useSearchParams();
    const id = params.get("id");
    return (
        <div>
            <MDeleteCon id={id}/>
        </div>
    )
}   
export default MDeletePage;
