import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserComponent from './UserComponent';
import WrapperComponent from './WrapperComponent';
import withHTTPRequests from '../HOCS/withHTTPRequests';

import styles from './DashboardComponent.module.css';

/**
 *  @desc Responsible for rendering the userlist, and the form for adding new users.
 * 
 */ 
class DashboardComponent extends Component {

  static propTypes = {
      getUsers: PropTypes.func.isRequired,
      postNewUser: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      color: 'green',
      
      name: '',
      username: '',
      email: '',

    }
    
  }
    
  componentDidMount() {
   this.updateUserList();
  }
  /**
   * @desc Calls HOC-method "getUsers", which returns a promise, and saves the returned data to component state.
   */
  updateUserList() {
    this.props.getUsers('users').then(users => {
      this.setState({users: [...users]});
    })
  }
  
/**
 * @desc Checks which input field has been changed, and updates its value. 
 * Using computed property name syntax.
 */
  handleInputChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /**
   * @desc Calls HOC-method postNewUser with the current form's input-values and updates the userlist if post was successful.
   *  Also clears form's input-fields.
   */
  handleSubmit = (event) => {

    this.props.postNewUser(this.state.name,this.state.username,this.state.email)

      .then(response => {
        if(response.status === 201) {
          this.updateUserList();
        }
        this.setState({
          name: '',
          username: '',
          email: ''
        })
      })
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

        <WrapperComponent >

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
              <input className={styles.inputField} placeholder="Name" type="text" name="name"
              value={this.state.name} onChange={this.handleInputChange}/>

              <input className={styles.inputField} placeholder="Username" type="text" name="username"
              value={this.state.username} onChange={this.handleInputChange}/>

              <input className={styles.inputField} placeholder="Email" type="email" name="email"
              value={this.state.email} onChange={this.handleInputChange}/>

              <button className={styles.addUserBtn} type="submit" >Add</button>
              
            </form>
          </div>
        </WrapperComponent>
      
      </React.Fragment>
    );

  }   
}

export default withHTTPRequests(DashboardComponent);