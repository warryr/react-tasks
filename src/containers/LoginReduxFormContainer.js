import React from 'react';
import LoginReduxForm from '../views/LoginReduxForm';

class LoginReduxFormContainer extends React.Component {
  handleLogin = values => {
    console.log(values);
  };

  render() {
    return <LoginReduxForm onSubmit={this.handleLogin}/>
  }
}

export default LoginReduxFormContainer;