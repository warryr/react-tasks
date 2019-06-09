import React from 'react';
import { connect } from 'react-redux';
import LoginRedux from '../views/LoginRedux';
import {
  setCurrentEmail,
  setCurrentPassword,
  setEmailValidation,
  setPasswordValidation,
  setLoginEmail,
  setLoginPassword,
} from '../actions/actionCreators';
import validateField from '../util/validateField';

class LoginReduxContainer extends React.Component {
  displayInputValue = () => {
    const email = document.getElementById('reduxEmail').value;
    const password = document.getElementById('reduxPassword').value;

    this.props.setCurrentEmail(email);
    this.props.setCurrentPassword(password);
  };

  handleLogin = e => {
    e.preventDefault();

    const currentEmail = this.props.currentEmailValue;
    const currentPassword = this.props.currentPasswordValue;

    const emailValid = validateField(currentEmail);
    const passwordValid = validateField(currentPassword);

    this.props.setEmailValidation(emailValid);
    this.props.setPasswordValidation(passwordValid);

    if (emailValid && passwordValid) {
      this.props.setLoginEmail(currentEmail);
      this.props.setLoginPassword(currentPassword);

      this.props.history.push('/login-redux/success');
    }
  };

  componentWillUnmount() {
    this.props.cleanCurrentValue();
  }

  render() {
    return (
      <LoginRedux
        displayInput={this.displayInputValue}
        login={this.handleLogin}
        emailValue={this.props.currentEmailValue}
        passwordValue={this.props.currentPasswordValue}
        emailError={!this.props.emailValid}
        passwordError={!this.props.passwordValid}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentEmailValue: state.currentInput.currentEmail,
  currentPasswordValue: state.currentInput.currentPassword,
  emailValid: state.validation.emailValid,
  passwordValid: state.validation.passwordValid,
  loggedInEmail: state.loggedInData.email,
  loggedInPassword: state.loggedInData.password,
});

const mapDispatchToProps = dispatch => ({
  setCurrentEmail: email => dispatch(setCurrentEmail(email)),
  setCurrentPassword: password => dispatch(setCurrentPassword(password)),
  setEmailValidation: valid => dispatch(setEmailValidation(valid)),
  setPasswordValidation: valid => dispatch(setPasswordValidation(valid)),
  setLoginEmail: email => dispatch(setLoginEmail(email)),
  setLoginPassword: password => dispatch(setLoginPassword(password)),
  cleanCurrentValue: () => {
    dispatch(setCurrentEmail(''));
    dispatch(setCurrentPassword(''));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginReduxContainer);
