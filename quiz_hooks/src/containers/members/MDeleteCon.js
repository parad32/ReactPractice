import { useNavigate, useParams } from "react-router-dom";
import { deleteOne } from "../../service/member/member";
import { useEffect } from "react";
function MDeleteCon() {
    const params = useParams();
    const result = deleteOne(params.id);
    const navidate = useNavigate();
    useEffect(() => {
        if(result === 1){
            alert("삭제 성공");
            navidate("/member/list");
        }
    },[navidate, result])
    return (
     <div>
        MDeleteCon
     </div>
    );
  }  
  export default MDeleteCon;