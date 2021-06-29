import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import './App.css';

import useWindowDimensions from './components/windowDimension';
import LogInScreen from './screens/LogIn/login';
import SignUpScreen from './screens/SignUp/signup';

function App() {
  const {width,height}=useWindowDimensions();
  return (
    <div className="App" 
    style={{
      width:width,
      height:height,
          }}
    >
      <Router>
        <Switch>
          <Route path="/" exact component={LogInScreen}/>
          <Route path="/signup" component={SignUpScreen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
