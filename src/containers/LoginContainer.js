import React from 'react';
import Login from "../views/Login";

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.displayInputValue = this.displayInputValue.bind(this);
    this.state = {
      currentEmailValue: '',
      currentPasswordValue: '',
      emailValid: false,
      passwordValid: false,
    }
  }

  render() {
    return (
        <Login login={this.onLogin} display={this.displayInputValue}
               emailValue={this.state.currentEmailValue} passwordValue={this.state.currentPasswordValue}/>
    );
  }

  displayInputValue() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    this.setState(state => ({
      ...state,
      currentEmailValue: email,
      currentPasswordValue: password,
      emailValid: email.split('').length > 5,
      passwordValid: password.split('').length > 5,
    }));
  }

  onLogin() {
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    if (this.state.emailValid && this.state.passwordValid) {
      document.getElementById('form').reset();
    }

  }
}