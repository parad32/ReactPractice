import { useSearchParams } from 'react-router-dom';
import MOneCom from '../../components/member/MOneCom';
import { useState } from 'react';
import MOneCon from '../../containers/member/MOneCon';
function MOnePage() {
const [params] = useSearchParams();
    console.log("MOnePage params : ", params.get("id"));
    const [user, setUser] = useState("3번 회원정보 가져옴")
    return (
        <>
            {/* <MOneCom user={user} /> */}
            <MOneCon />
        </>

    )
}   
export default MOnePage;
