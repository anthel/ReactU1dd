import React from 'react';
import './App.css';
import DashboardComponent from './Components/DashboardComponent';
import NavbarComponent from './Components/NavbarComponent';
import LoginScreen from './Screens/LoginScreen';
import DashboardScreen from './Screens/DashboardScreen';
import UserScreen from './Screens/UserScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
