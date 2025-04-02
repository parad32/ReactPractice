import { useNavigate, useSearchParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom";
import { useEffect, useState } from "react";
import { getOne } from "../../service/member/member";

function MOneCon() {
    const [params] = useSearchParams();
    console.log("params", params );
    const [data, setData] = useState({});
    useEffect(() => {
        const id = params.get("id");
        setData( getOne(id) );
    }, [params] )

    const navidate = useNavigate();
    const onDelete = ( id ) => {
        navidate("/member/delete/"+id);
    }
    const onUpdate = ( data ) => {
        navidate("/member/update/"+data.id);
    }
    return (
     <div>
        <MOneCom data={data} onDelete={onDelete} onUpdate={onUpdate} />
     </div>
    );
  }  
  export default MOneCon;