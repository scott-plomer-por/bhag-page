import { Link } from 'react-router-dom';
import Logout from './LogCompenets/Logout';

const Navbar = ({setisUserLogIn, isAdmin, GoogleLogout, clientID, isBackend}) => {

    return (  
        <div className = 'navbar'>
            <h1 className = 'navbar__heading'>BHAG</h1>
            <Logout setisUserLogIn = {setisUserLogIn} GoogleLogout = {GoogleLogout} clientID = {clientID}/>
            {isAdmin && <Link to="/input" className = 'navbar__lnk navbar__lnk--edit'>Edit Inputs</Link>}
            {isBackend && <Link to="/bhag" className = 'navbar__lnk navbar__lnk--edit'>Return Home</Link>}
        </div> 
    );
}
 
export default Navbar;