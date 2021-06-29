import React from 'react';

import './signup.css';

function logInVerify(){
    alert('You have successfully created an account');
}
function SignUpScreen(){
    return(
        <div className="signUp">
            <h1>
                SIGN UP
            </h1>
            
            <form className="formName">
            <input
                type="text"
                placeholder="First Name"
                />
            <input
                type="text"
                placeholder="Last Name"
                />
            </form>

            <form>
            <input
                type="email"
                placeholder="Email Address"
                />
                <input
                type="password"
                placeholder="Password"
                />
                <p className="warning">Your password must be at least 8 characters</p>
                <input
                type="password"
                placeholder="Confirm Password"
                />
            </form>

            <button
                className="signup-btn"
                onClick={logInVerify}
            >
                Create an account
            </button>

            <div className="condition">
                <p> Have an account?</p>
                <a href="/">Sign in</a>
            </div>
        </div>
    );
}

export default SignUpScreen;