import React, { Component } from 'react';
import UserComponent from './UserComponent';
import WrapperComponent from './WrapperComponent';
import styles from './DashboardComponent.module.css';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: ['Kalle', 'Pelle'],
      color: 'green',
      value: '',
    }
    
  }
  
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {

    let newUser = this.state.users.map(user => user);
    newUser.push(this.state.value);
    this.setState({users: newUser});
  
    event.preventDefault();
  }

  toggleColor = () => {
    this.state.color === 'red' ? 
    this.setState({color: 'green'}) : 
    this.setState({color: 'red'})
  }
  removeListUser = () => {
    let removedUser = this.state.users.map(user => user);
    removedUser.pop();
    this.setState({users: removedUser});
  }
  render() {

    return (
        <React.Fragment>
      <React.Fragment>

        <WrapperComponent>

          <ul className={styles.userList}>
            
            {this.state.users.map((user, index) => (
              <UserComponent key={index} user={user} color={this.state.color}/>
            ))}
          </ul>
          <button className={styles.toggleColorBtn} onClick={this.toggleColor}>
            Toggle Color
          </button>

        </WrapperComponent>
      </React.Fragment>

      <React.Fragment>

        <WrapperComponent style={{maxHeight: '245px'}}>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input className={styles.userNameInput} placeholder="New user.." type="text"
              value={this.state.value} onChange={this.handleChange}/>

              <button className={styles.addUserBtn} type="submit" >Add</button>
              <button className={styles.deleteUserBtn} type="button" onClick={this.removeListUser}
              >Remove</button>
            </form>
          </div>
        </WrapperComponent>
      </React.Fragment>
      </React.Fragment>
    );

  }
      
}


export default DashboardComponent;