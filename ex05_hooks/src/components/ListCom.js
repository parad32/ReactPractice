// === com ----
import { useContext } from "react";
// import { TestContext } from "../store/TestContesxt";

function ListCom( { data ,loading , error } ) {
    // const {num} = useContext(TestContext);
  return (<>
    {/* <h2>num : {num}</h2> */}
    { loading ?<h3>Loading . . . </h3> : 
    error ? <h3>{ error }</h3> :
    
    data && data.map( d=>
      <div key={d.id}>
        <span>{d.id}</span><br/>
        <span>{d.name}</span><br/>
      </div>
    )}
    </>);
}
export default ListCom;