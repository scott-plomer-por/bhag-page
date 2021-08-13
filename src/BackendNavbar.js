import { Link } from "react-router-dom";

const BackendNavbar = ({handleLogout}) => {
    return ( 
        <div>
            <Link to="/" onClick = {handleLogout}>Log Out</Link>
            <Link to="/">Return to Home</Link>
        </div>
    );
}
 
export default BackendNavbar;