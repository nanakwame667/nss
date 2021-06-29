import React from 'react';

import {motion} from 'framer-motion';

import './signup.css';

function logInVerify(){
    alert('You have successfully created an account');
}
function SignUpScreen(){
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    return(
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={variants}
        drag
    dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
    }}
        className="signUp">
            <div className="signUpDetails">
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
                <span></span><span></span><span></span><span></span>
            </button>

            <div className="condition">
                <p> Have an account?</p>
                <a href="/">Sign in</a>
            </div>
            </div>
        </motion.div>
    );
}

export default SignUpScreen;