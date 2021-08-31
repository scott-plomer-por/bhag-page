import { Link } from "react-router-dom";

const BackendNavbar = ({handleLogout}) => {
    return ( 
        <div className = ''>
            <h1 className = 'navbar__heading'>BHAG</h1>
            <Link to="/bhag" onClick = {handleLogout} className = 'navbar__lnk'>Log Out</Link>
            <Link to="/bhag" className = 'navbar__lnk'>Return to Home</Link>
        </div>
    );
}
 
export default BackendNavbar;