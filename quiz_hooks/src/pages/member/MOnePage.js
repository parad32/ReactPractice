import { useSearchParams } from 'react-router-dom';
import MOneCon from '../../containers/members/MOneCon';
function MOnePage() {
    const [params] = useSearchParams();
    const id = params.get("id");
    return (
        <div>
            <MOneCon id={id}/>
        </div>
    )
}   
export default MOnePage;
