import React, { Component } from 'react';

export default function withHTTPRequests(WrappedComponent) {

  return class extends Component {

    BASE_URL = "https://api.softhouse.rocks/";
    
    
    getUsers = (url) => {
      return fetch(this.BASE_URL + url)
      .then(response => response.json()
      );
    }

    postNewUser = (input_name, input_username, input_email) => {

  
      const newUser = {
  
        name: input_name,
      
        username: input_username,
      
        email: input_email,
      
        address: {
      
          street: 'mock street 12',
      
          suite: 'mock suite',
      
        city: 'mock city',
      
        zipcode: 'mock zip',
      
        geo: {
      
          lat: 0,
      
          lng: 0
        }
      }
     }
  
      return fetch('https://api.softhouse.rocks/users', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify(newUser),
      })
      
      
    }
     
    
    render() {
      
      return (
        <WrappedComponent 
          getUsers={this.getUsers}
          postNewUser={this.postNewUser}
          {...this.props}
          />
      )
    }
  }
}