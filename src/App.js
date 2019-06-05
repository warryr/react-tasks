import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import ParentCounterContainer from './containers/ParentCounterContainer';
import TabsContainer from './containers/TabsContainer';
import AboutContainer from './containers/AboutContainer';
import ErrorContainer from './containers/ErrorContainer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/404'} exact component={null}/>
            <Route path={process.env.PUBLIC_URL + '/'} component={TabsContainer}/>
          </Switch>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={null}/>
            <Route path={process.env.PUBLIC_URL + '/about'} exact component={AboutContainer}/>
            <Route path={process.env.PUBLIC_URL + '/counters'} exact component={ParentCounterContainer}/>
            <Route path={process.env.PUBLIC_URL + '/404'} exact component={ErrorContainer}/>
            <Redirect to={process.env.PUBLIC_URL + '/404'}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;