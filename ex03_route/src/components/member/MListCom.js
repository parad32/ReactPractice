import { Link } from "react-router-dom";
function MListCom2({indexBtn, beforeBtn}) {
    console.log("end")
    return (
        <>
           <div>1. 회원 목록</div>
           <div>2. 회원 목록</div>
           <div>3. 회원 목록</div>
           <hr />
           <Link to ="/member/one?id=3">3번 회원 상세</Link>&nbsp;
           <Link to ="/member/update/1">1번 회원 수정</Link>&nbsp;
           <hr />
           <button onClick={indexBtn}>index</button> &nbsp;
           <button onClick={beforeBtn}>before</button>
        </>
    )
}       


function MListCom({list, onDelete}) {
    console.log("end")
    return (
        <>
            {list && list.map((item,index) => (
                <div key={index}>
                    id:{item.id}<br/>
                    name:
                    {/* <Link to ={`/member/one?id=${item.id}`}>
                        {item.name}
                    </Link> */}
                    <Link to ={`/member/one/${item.id}`}>
                        {item.name}
                    </Link>
                    <br/>
                    {/* age:{item.age}<br/> */}
                    addr :{item.addr}<br/>
                    <button onClick = {() => onDelete(item.id)}>{item.id} 삭제 </button>  
                    <hr/>
                </div>
            ))
            }
        </>
    )
}
export default MListCom;  