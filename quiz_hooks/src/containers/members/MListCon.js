import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getList } from "../../service/member/member";
import { addOne } from "../../service/member/member";
function MListCon() {
    const [list, setList] = useState([]);
    useEffect(() => {
        setList( getList() );
        
    },[] )

    //console.log("MListCon", list);
    return (
     <div>
        <MListCom list={list} />
     </div>
    );
  }  
  export default MListCon;