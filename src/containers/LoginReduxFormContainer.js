import React from 'react';
import LoginReduxForm from '../views/LoginReduxForm';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import validateField from '../util/validateField';
import {
  setEmailValidation,
  setPasswordValidation,
  setLoginEmail,
  setLoginPassword,
  cleanValidationState,
} from '../actions/actionCreators';

class LoginReduxFormContainer extends React.Component {
  handleLogin = values => {
    const email = values.email;
    const password = values.password;

    const emailValid = validateField(email);
    const passwordValid = validateField(password);

    this.props.setEmailValidation(emailValid);
    this.props.setPasswordValidation(passwordValid);

    if (emailValid && passwordValid) {
      this.props.setLoginEmail(email);
      this.props.setLoginPassword(password);

      this.props.history.push('/login-redux-form/success');
    }
  };

  componentWillUnmount() {
    this.props.cleanValidationState();
  }

  render() {
    return (
      <LoginReduxForm
        onSubmit={this.handleLogin}
        emailValue={this.props.currentEmail}
        passwordValue={this.props.currentPassword}
        emailError={!this.props.emailValid}
        passwordError={!this.props.passwordValid}
      />
    );
  }
}

const selector = formValueSelector('loginForm');

const mapStateToProps = state => ({
  currentEmail: selector(state, 'email') || '',
  currentPassword: selector(state, 'password') || '',
  emailValid: state.validation.emailValid,
  passwordValid: state.validation.passwordValid,
});

const mapDispatchToProps = dispatch => ({
  setEmailValidation: valid => dispatch(setEmailValidation(valid)),
  setPasswordValidation: valid => dispatch(setPasswordValidation(valid)),
  setLoginEmail: email => dispatch(setLoginEmail(email)),
  setLoginPassword: password => dispatch(setLoginPassword(password)),
  cleanValidationState: () => dispatch(cleanValidationState()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginReduxFormContainer);
