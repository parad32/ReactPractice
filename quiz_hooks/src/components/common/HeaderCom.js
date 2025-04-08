import { Link, Outlet } from 'react-router-dom';
function HeaderCom() {
    return (
        <div>
            <header>
                <Link to='/'>Home </Link>
                <Link to='/member/list'>Member</Link> &nbsp;
                <Link to='/member/signup'>SignUp</Link> &nbsp;
                <Link to='/member/login'>Login</Link> &nbsp;
                <hr />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}           
export default HeaderCom;
