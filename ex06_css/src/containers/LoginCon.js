// --- login con ---
import { useReducer,useContext } from "react";
import HeaderCom from "../components/common/HeaderCom";
import LoginCom from "../components/LoginCom";
import { initalState, reducer } from "../modules/authModule";
import { login } from "../service/authService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
function LoginCon() {
    const [state, dispatch] = useReducer(reducer, initalState)
    const {loginProvider} = useContext(AuthContext);
    //console.log("login con : ", state)
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "CHANGE_INPUT", form: "login", name, value });
        // console.log("login onChange : ", state.login)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "LOADING" });
        // console.log("login onSubmit: ", state.login)
        const result = login(state.login.username, state.login.password);
        dispatch({ type: "FINISHED" });
        if(result.status === 200) {
            alert("로그인 성공");
            navigate("/");
            loginProvider(state.login.username);
        } else {
            alert("로그인 실패");
            dispatch({type: "INITALSTATE"})
        }
    }
    const navigate = useNavigate();

    return (<>
        <HeaderCom />
        <LoginCom onChange={onChange} username={state.login.username}
                                        password={state.login.password}
                                        onSubmit={onSubmit}/>
      </>);
  }
  export default LoginCon;