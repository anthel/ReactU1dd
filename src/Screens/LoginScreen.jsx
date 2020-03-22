import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WrapperComponent from '../Components/WrapperComponent';


class LoginScreen extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }
  handleSubmit = (e) => {
    if(this.state.value.length > 10) {
      this.props.history.push("/dashboard");
    }
    e.preventDefault();
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  render() {
    return (
      <WrapperComponent showToggleBtn={true}>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Username..." type="text"
            value={this.state.value} onChange={this.handleChange}/>

            <button className="loginBtn" type="submit">Login</button>
            
          </form>
        </div>
      </WrapperComponent>
    )
  }
}

export default LoginScreen;