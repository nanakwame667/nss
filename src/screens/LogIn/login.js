import React from 'react';

import './login.css';


function logInVerify(){
    alert('You have successfully logged in');
}
function LogInScreen(){
    return(
        <div className="logIn">
            <h1>SIGN IN</h1>
            <div className="formDetails">
            <form>
                <input
                className="email"
                type="email"
                placeholder="Email Address"
                />
                <input
                className="password"
                type="password"
                placeholder="Password"
                />
            </form>
            </div>
                <button
                onClick={logInVerify}
                >
                    SIGN IN
                </button>
                <div className="condition">
                <p>Do not have an account yet?</p>
                <a href="/signup">Sign up!</a>
                </div>
            
        </div>
    );
}

export default LogInScreen;