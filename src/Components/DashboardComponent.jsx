import React, { Component } from 'react';
import UserComponent from './UserComponent';
import WrapperComponent from './WrapperComponent';
import styles from './DashboardComponent.module.css';

/**
 *  @desc Handles user input and renders ápp components
 *  @render Renders two wrapper components, which of one contains a list of users and a button
 *  for toggling textcolor on the list. The first wrapper also renders a UserComponent which 
 *  contains elements for the individual user.
 *  The other wrapper contains an input field with two buttons
 *  where the user can add and delete users in the list.
 */ 


class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: ['Kalle', 'Pelle'],
      color: 'green',
      value: '',
    }
  }
  
  /**
   * @desc Called when user types in the input field, recieves the input and sets it to value state
   */
 
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  /**
   * @desc Called when user clicks submit, sets a new userlist state containing the old list plus
   * the current value of the input field (value state). Then clears the input field.
   */
  handleSubmit = (event) => {
    this.setState({
      users: [...this.state.users, this.state.value], 
      value: ''});
    event.preventDefault();

  }

  /**
   * @desc Fires when user clicks on toggleColor button, sets color state to either green or red
   * depending on the current color.
   */
  toggleColor = () => {
    this.state.color === 'red' ? 
    this.setState({color: 'green'}) :
    this.setState({color: 'red'})
  }
 
  removeListUser = () => {
    this.setState({users: this.state.users.slice(0, -1)});
  }
  render() {

    return (
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
    );

  }   
}

export default DashboardComponent;