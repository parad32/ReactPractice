import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        console.log("NotFound useEffect");
    },[]);
    return (
        <div>
            404NotFound
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}   
export default NotFound;
