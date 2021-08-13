import { Link } from 'react-router-dom';

const Navbar = ({handleLogout, isAdmin}) => {

    return (  
        <div>
            <Link to="/" onClick = {handleLogout}>Log Out</Link>
            {isAdmin && <Link to="/input">Edit Inputs</Link>}
        </div> 
    );
}
 
export default Navbar;