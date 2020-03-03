import React, { Component } from 'react';

function UserComponent(props) {
  
    return <li key={props.user} style={{
      border: '1px solid black'
    }}><p style={{color: props.color}}>{props.user}</p></li>
}

export default UserComponent;