import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarComponent(props) {

  return(
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="navlink-active" to="/login" >Login</NavLink></li>
        <li><NavLink activeClassName="navlink-active" to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink activeClassName="navlink-active" to="/user">User</NavLink></li>
      </ul>
    </div>
  )
}


export default NavbarComponent;