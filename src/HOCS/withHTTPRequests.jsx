import React, { Component } from 'react';

export default function withHTTPRequests(WrappedComponent) {

  return class extends Component {

    BASE_URL = "https://api.softhouse.rocks/";
    constructor(props) {
      super(props);

    
    }
    
    getUsers = (url) => {
      
      return fetch(this.BASE_URL + url)
      .then(response => response.json()
      
      );
      
    }
     
    
    render() {
      
      return (
        <WrappedComponent 
          getUsers={this.getUsers}
          
          {...this.props}
          />
      )
    }
  }
}