// ====== Login Con =========
import LoginCom from "../components/LoginCom";
import { initialState, reducer } from "../moduls/member_red";
import { useContext, useReducer } from "react";
import { AuthContext } from "../store/AuthContext";
import { loginCheck } from "../service/member";
import {useNavigate} from "react-router-dom"
function LoginCon() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = (e) => {
    console.log("onChange e.target : ", e.target );
    const { name, value } = e.target;
    dispatch( {type:"CHANGE_INPUT",name,value, form:"login"} )
  }
  console.log("login con state : ", state );

  const {login} = useContext(AuthContext);
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault();
    
    dispatch({type:"LOADING"})
    const result = loginCheck(state.login.id, state.login.pwd);
    dispatch({type:"FINISHED"})

    if(result === 0 ){ //인증 통과
      login( state.login.id )
      navigate("/list")
    }
  }
  return (<>
      <LoginCom onSubmit={onSubmit} loading = { state.loading }
      username={state.login.id} password = {state.login.pwd}
                onChange={onChange}/>
      </>);
  }
  export default LoginCon;