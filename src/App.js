import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavbarComponent from './Components/NavbarComponent';
import LoginScreen from './Screens/LoginScreen';
import DashboardScreen from './Screens/DashboardScreen';
import UserScreen from './Screens/UserScreen';

import './App.css';

/**
 * @desc Initializes dashboard component in a flexbox container.
 */

function App() {

  return (

    <Router>
      <div className="nav-sidebar">
        <NavbarComponent/>
      </div>
      <Switch>
        <React.Fragment>
          <div className="container">
            <Route path="/" exact component={LoginScreen}/>
            
            <Route path="/login" component={LoginScreen}/>

            <Route path="/dashboard" component={DashboardScreen}/>

            <Route path="/user" exact component={UserScreen}/>

            <Route path="/user/:id" exact component={UserScreen}/>

          </div>
        </React.Fragment>
      </Switch>

    </Router>

  );
  
}

export default App;
