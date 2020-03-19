import React, { Component } from 'react';

import UserComponent from './UserComponent';
import WrapperComponent from './WrapperComponent';
import withHTTPRequests from '../HOCS/withHTTPRequests';

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
      users: [],
      color: 'green',
      
      Name: '',
      Username: '',
      Email: '',
      
    }
    
  }
  
  componentWillMount() {
  
    this.props.customEvent('https://api.softhouse.rocks/users').then(
      this.props.users.map(user => {
        this.setState({users: [...this.state.users, user]});
      })
    )
    
    
    }
    
    componentDidMount() {
      
      
      console.log(this.state.users);
    }
  

  handleInputChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /**
   * @desc Called when user clicks submit, sets a new userlist state containing the old list plus
   * the current value of the input field (value state). Then clears the input field.
   */
  handleSubmit = (event) => {
    this.setState({
      users: [...this.state.users, this.state.Name], 
      name: ''} );
      
    event.preventDefault();
    
  }

  toggleColor = () => {
    this.state.color === 'red' ? 
    this.setState({color: 'green'}) :
    this.setState({color: 'red'})
  }
 
 
  render() {

    return (
      <React.Fragment>

        <WrapperComponent showToggleBtn={true}>

          <ul className={styles.userList}>
            
            {this.state.users.map((user, index) => (
              <UserComponent key={index} user={user} color={this.state.color}/>
            ))}
          </ul>
          <button className={styles.toggleColorBtn} onClick={this.toggleColor}>
            Toggle Color
          </button>

        </WrapperComponent>
     
        <WrapperComponent showToggleBtn={true}>
          <div> 
            <form onSubmit={this.handleSubmit}>
              <input className={styles.inputField} placeholder="Name" type="text"
              value={this.state.name} onChange={this.handleChangeName}/>

              <input className={styles.inputField} placeholder="Username" type="text"
              value={this.state.username} onChange={this.handleChangeUsername}/>

              <input className={styles.inputField} placeholder="Email" type="email"
              value={this.state.email} onChange={this.handleChangeEmail}/>

              <button className={styles.addUserBtn} type="submit" >Add</button>
              
            </form>
          </div>
        </WrapperComponent>
      
      </React.Fragment>
    );

  }   
}

export default withHTTPRequests(DashboardComponent);