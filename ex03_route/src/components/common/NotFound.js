import { Link, useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>404 Not Found</h2>
            <Link to = "/"> Go to Home</Link>
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    )
}   
export default NotFound;
