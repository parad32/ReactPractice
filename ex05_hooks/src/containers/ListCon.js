import { useEffect } from "react";
import HeaderCom from "../components/HeaderCom";
import ListCom from "../components/ListCom";
import { useReducer } from "react";
import { initialState ,reducer } from "../moduls/member_red";
import { getList } from "../service/member";

function ListCon() {
    const [state, dispatch] = useReducer(reducer, initialState);
    //const [data, setData] = useState();
    useEffect( ()=> {
      //setData( 서버 데이터 저장 )
      try{
        dispatch( {type:"LOADING"} )
        setTimeout( ()=> {
          const data = getList();
          dispatch( {type:"FINISHED"} )
          dispatch({type:"LIST", data})
        }, 100 )
        //throw new Error("Failed to fetch data")
      }catch(e){
        dispatch( {type:"ERROR", error : e.toString() } )
      }
    }, [] )
    console.log("state : ", state)
      return (<>
       
        <ListCom data = {state.data} loading={state.loading} error={state.error} />
        </>);
    }
    export default ListCon;

