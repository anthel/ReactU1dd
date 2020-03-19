import React, { Component } from 'react';

export default function withHTTPRequests(WrappedComponent) {

  return class extends Component {

    BASE_URL = "https://api.softhouse.rocks/";
    constructor(props) {
      super(props);

    
    }
    
    getUsers = () => {
      
      return fetch(BASE_URL + "users")
      .then(response => response.json()
      
      );
      
    }
     
    
    render() {
      
      return (
        <WrappedComponent 
          customEvent={this.customEvent}
          
          {...this.props}
          />
      )
    }
  }
}