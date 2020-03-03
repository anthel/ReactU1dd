import React, { Component } from 'react';
import UserComponent from './UserComponent';
import styles from './DashboardComponent.module.css';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'green',
    }
    
  }
  
  handleChange = (event) => {
    this.props.onNewUserInput(event.target.value);
    console.log(this.state.value);
  }
 /*  addUser = () => {
    this.setState({users: event.target.value});
  } */
  handleSubmit = (event) => {
    
    
    /* let newUser = this.state.users.map(user => user);
    newUser.push(this.state.value); */
    this.props.value.push(this.props.value);
    this.setState({users: this.props.value});
/*     this.state.users.push(this.state.newUser); */
  
    console.log(this.state.users);
    console.log(this.state.value);
    console.log(event);
    event.preventDefault();
  }

  render() {

    
    return (
        
      <React.Fragment>
        {this.props.content === 'userlist' ? 
        <ul className={styles.userList}>
          {this.props.value.map((user, index) => (
            <UserComponent key={index} user={user} color={this.state.color}/>
          ))}
        </ul>:

        <div>
          <form onSubmit={this.handleSubmit}>
          <input className={styles.userNameInput} placeholder="New user.." type="text"
          value={this.props.value} onChange={this.handleChange}/>

          <button className={styles.addUserBtn} type="submit" >Add</button>
          <button className={styles.deleteUserBtn}>Remove</button>
          </form>
        </div>
        }
      </React.Fragment>
    );
          /* <UserComponent user={this.state.users[i]}/> */

  }
      
}


export default DashboardComponent;