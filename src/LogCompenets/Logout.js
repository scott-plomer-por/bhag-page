

const Logout = ({GoogleLogout, clientID, setisUserLogIn}) => {
    return ( 
        <div className = 'google-btn google-btn--logout'>
            <GoogleLogout
                clientId = {clientID}
                buttonText = "Logout"
                onLogoutSuccess = {()=>setisUserLogIn(false)}
            />
        </div>
     );
}
 
export default Logout;