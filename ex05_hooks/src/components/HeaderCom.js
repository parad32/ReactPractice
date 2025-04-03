import { Link } from "react-router-dom";

function HeaderCom({isLoggedIn, user, onLogout}) {
    return (
        <>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/list">List</Link>&nbsp; 
            {isLoggedIn ? 
            <><Link to="/logout" onClick={onLogout}>Logout</Link>{user}님 로그인 상태</> :
            <Link to="/login">Login</Link>
            }
            <Link to="/register">Register</Link>
            <Link to="/context">Context</Link>
        </>)
    
}

export default HeaderCom;