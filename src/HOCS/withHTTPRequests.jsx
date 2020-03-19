import React, { Component } from 'react';

export default function withHTTPRequests(WrappedComponent) {

  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        users: []
      }
    }

    customEvent = (url) => {
      
      fetch(url)
      .then(response => response.json()
      .then(response => {
        this.setState({users: response})
        console.log(response)
        console.log(this.state.users)
        
      })
      );
      
    }
     
    
    render() {
      
      return (
        <WrappedComponent 
          customEvent={this.customEvent}
          users={this.state.users}
          {...this.props}
          />
      )
    }
  }
}