import React from 'react';
import './App.css';
import ParentCounterContainer from './containers/ParentCounterContainer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ParentCounterContainer />
      </div>
    );
  }
}

export default App;
