import React, { Component } from 'react';

/**
 * @desc Enhances the given component with methods used for handling API requests.
 * @param WrappedComponent Component to be enhanced.
 */

export default function withHTTPRequests(WrappedComponent) {


  return class extends Component {

    BASE_URL = "https://api.softhouse.rocks/";
    
    /**
     * @desc Using fetch API to GET user data depending on the recieved URL, returns a promise.
     */
    getUsers = (url) => {
      return fetch(this.BASE_URL + url)
      .then(response => response.json()
      );
    }

    /**
     * @desc Using fetch API to POST user data to external API resource using input data from a form. Returns a promise.
     */
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