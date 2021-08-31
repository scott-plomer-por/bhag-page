



const Login = ({GoogleLogin, clientID, handleLogin}) => {
    return ( 
        <div className = 'google-btn google-btn--login'>
            <GoogleLogin
            clientId = {clientID}
            buttonText= "Sign in with Google"
            onSuccess = {(res)=>handleLogin(res)}
            onFailure = {()=>console.log('fail to log in')}
            cookiePolicy = {'single_host_origin'}
            isSignedIn = {true}
            />
        </div>
     );
}
 
export default Login;