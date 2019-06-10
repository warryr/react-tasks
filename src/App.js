import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import ParentCounterContainer from './containers/ParentCounterContainer';
import TabsContainer from './containers/TabsContainer';
import AboutContainer from './containers/AboutContainer';
import ErrorContainer from './containers/ErrorContainer';
import LoginContainer from './containers/LoginContainer';
import LoginReduxContainer from './containers/LoginReduxContainer';
import LoginReduxSuccessContainer from './containers/LoginReduxSuccessContainer';
import LoginReduxFormContainer from './containers/LoginReduxFormContainer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path='/404' exact component={null} />
            <Route path='/' component={TabsContainer} />
          </Switch>
          <Switch>
            <Route path='/' exact component={null} />
            <Route path='/about' exact component={AboutContainer} />
            <Route path='/counters' exact component={ParentCounterContainer} />
            <Route path='/login' exact component={LoginContainer} />
            <Route path='/login-redux' exact component={LoginReduxContainer} />
            <Route
              path='/login-redux/success'
              exact
              component={LoginReduxSuccessContainer}
            />
            <Route
              path='/login-redux-form'
              exact
              component={LoginReduxFormContainer}
            />
            <Route path='/404' exact component={ErrorContainer} />
            <Redirect to='/404' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
