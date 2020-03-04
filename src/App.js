import React, { Component } from 'react';
import styles from './App.css';
import DashboardComponent from './Components/DashboardComponent';

import UserComponent from './Components/UserComponent';


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

     <DashboardComponent/>

    </div>
  );
  }
}

export default App;
