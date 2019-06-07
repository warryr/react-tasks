import React from 'react';
import { connect } from 'react-redux';
import LoginReduxSuccess from '../views/LoginReduxSuccess';

class LoginReduxSuccessContainer extends React.Component {
  render() {
    return (
      <LoginReduxSuccess
        email={this.props.email}
        password={this.props.password}
      />
    );
  }
}

const mapStateToProps = state => ({
  email: state.loggedInData.email,
  password: state.loggedInData.password,
});

export default connect(mapStateToProps)(LoginReduxSuccessContainer);
