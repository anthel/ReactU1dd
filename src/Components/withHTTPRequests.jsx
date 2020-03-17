import React, { Component } from 'react';

function withHTTPRequests(WrappedComponent) {

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: []
      }
    }
    componentDidMount() {

      fetch('https://api.softhouse.rocks/users')
      .then((response) => response.json()
      .then((response) => 
        this.setState({users: response})
      ));
    }
    render() {

      return <WrappedComponent users={this.state.users}/>
    }
  }
}