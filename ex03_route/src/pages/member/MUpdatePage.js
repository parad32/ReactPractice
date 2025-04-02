import MUpdateCom from '../../components/member/MUpdateCom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import MUpdateCon from '../../containers/member/MUpdateCon';
function MUpdatePage() {
    const params = useParams();
    console.log("params : ", params);
    /*
    page >> container >> service(DB연동) >> components(UI)
    */ 
    const [user, setUser] = useState("1번 회원정보 가져옴")
    return (
        <>
            {/* <MUpdateCom user={user} /> */}
            <MUpdateCon />
        </>
    )
}
export default MUpdatePage;
