import React from 'react';
import { connect } from 'react-redux';
import LoginRedux from '../views/LoginRedux';

class LoginReduxContainer extends React.Component {
  render() {
    return (
      <LoginRedux />
    )
  }
}

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(LoginReduxContainer);