import React, { Component } from 'react';

function UserComponent(props) {
  
    return <li key={props.user} style={{
      borderBottom: '1px solid grey',
      height: '35px'}}>
        <p style={{color: props.color, fontSize: '20px'}}>{props.user}</p></li>
}

export default UserComponent;