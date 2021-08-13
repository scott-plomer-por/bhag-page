

const LoginPage = ( {emailError, passwordError, email, setEmail, password, setPassword, user, handleLogin, handleSignup, wantsToSignIn, setwantsToSignin} ) => {
    return ( 
        <>     
            {user || wantsToSignIn ? 
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" required name="email" id="email" autoComplete = "email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <span>{emailError}</span>
                    <label htmlFor="password">Password: </label>
                    <input type="password" required name="password" id="password" autoComplete = "current-password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <span>{passwordError}</span>
                    <button onClick={(e)=>{e.preventDefault(); handleLogin();}}>LOG IN</button>
                    <button onClick={(e)=>{e.preventDefault(); setwantsToSignin(false);}}>DON'T HAVE AN ACCOUINT? SIGN UP</button> 
                </form> : 
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" required name="email" id="email" autoComplete = "email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <span>{emailError}</span>
                    <label htmlFor="password">Password: </label>
                    <input type="password" required name="Password" id="password" autoComplete = "new-password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <span>{passwordError}</span>
                    <button onClick={(e)=>{e.preventDefault(); handleSignup();}}>SIGN UP</button>
                    <button onClick={(e)=> {e.preventDefault(); setwantsToSignin(true);}}>ALREADY HAVE AN ACCOUNT? LOG IN</button>
                </form>
            }
        </>
     );
}
 
export default LoginPage;