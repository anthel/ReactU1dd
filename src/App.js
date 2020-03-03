import React, { Component } from 'react';
import styles from './App.css';
import DashboardComponent from './Components/DashboardComponent';
import WrapperComponent from './Components/WrapperComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      users: [],
    }
  }
  handleNewUserInput = (newUser) => {
    this.setState({value: newUser});
  }

  render() {
  return (
    <div className="container">
      <WrapperComponent>
        <DashboardComponent 
          content="userlist" 
          users={this.state.users} 
           />
      </WrapperComponent>
      <WrapperComponent>
        <DashboardComponent 
          content="editusers" 
          value={this.state.value} 
          onNewUserInput={this.handleNewUserInput} />
      </WrapperComponent>
    </div>
  );
  }
}

export default App;
