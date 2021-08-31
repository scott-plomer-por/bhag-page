import Login from "./LogCompenets/Login";

const LoginPage = ( {GoogleLogin, clientID, handleLogin}) => {


    return ( 
        <div className = 'login--container'>
            <div className="login--container__left">
            &nbsp;
            </div>
            <div className="login--container__right">
                <h1 className = 'login--container__h1 h1-text'>Click login to login</h1>
                <Login GoogleLogin = {GoogleLogin} clientID = {clientID} handleLogin = {handleLogin}/>
            </div>
          
        </div>
     );
}
 
export default LoginPage;