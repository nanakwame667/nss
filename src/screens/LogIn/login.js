import React from 'react';

import {motion} from 'framer-motion';

import './login.css';

function logInVerify(){
    alert('You have successfully logged in');
}
function LogInScreen(){
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
        className="logIn">
            <div className="logInDetails">
            <h1>SIGN IN</h1>

            <div className="formDetails">
            <form>
                <input
                type="email"
                placeholder="Email Address"
                />
                <input
                type="password"
                placeholder="Password"
                />
            </form>
            </div>

            <button
                onClick={logInVerify}
            >
            SIGN IN
            <span></span><span></span><span></span><span></span>
            </button>

            <div className="condition">
                <p>Do not have an account yet?</p>
                <a href="/signup">Sign up!</a>
            </div>
            </div>
        </motion.div>
    );
}

export default LogInScreen;