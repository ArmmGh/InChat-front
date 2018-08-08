import React, { Component } from 'react';
import './Auth.scss';
import RegForm from './Register';
import LogForm from './Login';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'register',
    };
    this.handleForm = this.handleForm.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }

  handleForm = type => (e) => {
    this.setState({ formType: type });
  };

  handleNewUser = (name) => {
    this.props.newUser(name);
  };

  render() {
    const { formType } = this.state;
    return (
      /* eslint-disable */
      <div className="auth">
        <ul>
          <li
            className={formType === 'register' ? 'active' : ''}
            onClick={this.handleForm('register')}
          >
            Register
          </li>
          <li className={formType === 'login' ? 'active' : ''} onClick={this.handleForm('login')}>
            Login
          </li>
        </ul>
        {formType === 'register' ? <RegForm /> : <LogForm newUser={this.handleNewUser} />}
      </div>
      /* eslint-enable */
    );
  }
}

export default Auth;
