import HeaderCom from "../components/HeaderCom";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

function HeaderCon() {
    const {auth , logout} = useContext(AuthContext);
    const onLogout = (e) => {
        e.preventDefault();
        logout();
    }
    return (
        <>
        
            <HeaderCom isLoggedIn={auth.isLoggedIn} user={auth.user}
            onLogout={onLogout}/>
        </>
    )
}       

export default HeaderCon;