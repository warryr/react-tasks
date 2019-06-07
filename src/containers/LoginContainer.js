import React from 'react';
import Login from '../views/Login';
import validateField from '../util/validateField';

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmailValue: '',
      currentPasswordValue: '',
      emailValid: false,
      passwordValid: false,
      emailError: false,
      passwordError: false,
      loggedInData: '',
    };
  }

  displayInputValue = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    this.setState({
      currentEmailValue: email,
      currentPasswordValue: password,
      emailValid: validateField(email),
      passwordValid: validateField(password),
    });
  };

  handleLogin = e => {
    e.preventDefault();

    this.setState(state => ({
      emailError: !state.emailValid,
      passwordError: !state.passwordValid,
    }));

    if (this.state.emailValid && this.state.passwordValid) {
      console.log('Введенная почта: ' + this.state.currentEmailValue);
      console.log('Введенный пароль: ' + this.state.currentPasswordValue);

      this.setState(state => ({
        loggedInData: JSON.stringify({
          email: state.currentEmailValue,
          password: state.currentPasswordValue,
        }),
      }));

      document.getElementById('form').reset();
      this.resetState();
    }
  };

  resetState = () => {
    this.setState({
      currentEmailValue: '',
      currentPasswordValue: '',
      emailValid: false,
      passwordValid: false,
      emailError: false,
      passwordError: false,
    });
  };

  render() {
    return (
      <Login
        login={this.handleLogin}
        displayInput={this.displayInputValue}
        data={this.state.loggedInData}
        emailValue={this.state.currentEmailValue}
        passwordValue={this.state.currentPasswordValue}
        emailError={this.state.emailError}
        passwordError={this.state.passwordError}
      />
    );
  }
}
